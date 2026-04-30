"use server";

import { z } from "zod";
import { CheckoutPayload } from "@/lib/types";

export const checkoutSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(8, "Phone is required"),
  address: z.string().min(8, "Address is required")
});

export async function submitOrder(payload: CheckoutPayload) {
  const parsed = checkoutSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors };
  }

  return {
    ok: true,
    orderId: `ORD-${Date.now()}`
  };
}