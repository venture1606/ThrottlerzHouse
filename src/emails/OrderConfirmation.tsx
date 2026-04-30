interface OrderConfirmationEmailProps {
  orderId: string;
  total: number;
  currency: string;
}

export function buildOrderConfirmationEmail({ orderId, total, currency }: OrderConfirmationEmailProps): string {
  return `Order ${orderId} confirmed. Total: ${currency} ${total.toFixed(2)}.`;
}
