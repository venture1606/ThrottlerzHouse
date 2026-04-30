import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { env } from "@/lib/env";
import { products } from "@/lib/data/products";
import type { ShippingAddress } from "@/lib/types";
import { stripe } from "@/lib/stripe";

interface CheckoutRequestItem {
  productId: string;
  quantity: number;
}

interface CheckoutRequestBody {
  items: CheckoutRequestItem[];
  shippingAddress: ShippingAddress;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = (await request.json()) as CheckoutRequestBody;
    const items = Array.isArray(body.items) ? body.items : [];

    if (items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const lineItems = items
      .map((item) => {
        const product = products.find((entry) => entry.id === item.productId);
        if (!product) return null;

        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.name
            },
            unit_amount: Math.round(product.price * 100)
          },
          quantity: Math.max(1, item.quantity)
        };
      })
      .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

    if (lineItems.length === 0) {
      return NextResponse.json({ error: "No valid products in cart." }, { status: 400 });
    }

    const origin = headers().get("origin") ?? env.NEXTAUTH_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      metadata: {
        items: JSON.stringify(items),
        shippingAddress: JSON.stringify(body.shippingAddress)
      }
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Unable to create checkout session." }, { status: 500 });
  }
}
