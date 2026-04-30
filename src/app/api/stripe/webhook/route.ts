import { NextResponse } from "next/server";
import type Stripe from "stripe";

import { buildOrderConfirmationEmail } from "@/emails/OrderConfirmation";
import { env } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import { products } from "@/lib/data/products";
import type { ShippingAddress } from "@/lib/types";
import { stripe } from "@/lib/stripe";

interface CheckoutRequestItem {
  productId: string;
  quantity: number;
}

async function persistOrder(session: Stripe.Checkout.Session): Promise<void> {
  const metadata = session.metadata ?? {};
  const itemPayload = metadata.items ?? "[]";
  const shippingPayload = metadata.shippingAddress ?? "{}";

  const items = JSON.parse(itemPayload) as CheckoutRequestItem[];
  const shipping = JSON.parse(shippingPayload) as ShippingAddress;

  const orderItems = items
    .map((entry) => {
      const product = products.find((item) => item.id === entry.productId);
      if (!product) return null;

      return {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: Math.max(1, entry.quantity),
        imageUrl: product.images[0] ?? ""
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  if (orderItems.length === 0 || !session.id) {
    return;
  }

  const total = (session.amount_total ?? 0) / 100;
  const email = session.customer_details?.email ?? "";

  const user = email
    ? await prisma.user.upsert({
        where: { email },
        update: {},
        create: { email, name: session.customer_details?.name ?? undefined }
      })
    : null;

  const order = await prisma.order.upsert({
    where: {
      stripeSessionId: session.id
    },
    update: {},
    create: {
      userId: user?.id,
      stripeSessionId: session.id,
      status: "processing",
      total,
      currency: "INR",
      shippingName: shipping.name,
      shippingLine1: shipping.line1,
      shippingLine2: shipping.line2,
      shippingCity: shipping.city,
      shippingState: shipping.state,
      shippingPostal: shipping.postalCode,
      shippingCountry: shipping.country,
      customerEmail: email,
      items: {
        create: orderItems
      }
    }
  });

  if (email) {
    await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: email,
      subject: `Order confirmation ${order.id}`,
      text: buildOrderConfirmationEmail({ orderId: order.id, total: order.total, currency: order.currency })
    });
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature." }, { status: 400 });
    }

    const payload = await request.text();
    const event = stripe.webhooks.constructEvent(payload, signature, env.STRIPE_WEBHOOK_SECRET);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      void persistOrder(session);
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ error: "Webhook signature verification failed." }, { status: 400 });
  }
}
