import type { Order } from "@/lib/types";

export const orders: Order[] = [
  {
    id: "ord-1001",
    userId: "user-1",
    items: [
      {
        productId: "p-001",
        name: "Pulse Pro Smartwatch",
        price: 14999,
        quantity: 1,
        imageUrl: "/images/products/smartwatch-1.jpg"
      },
      {
        productId: "p-012",
        name: "Trail Water Bottle",
        price: 999,
        quantity: 2,
        imageUrl: "/images/products/bottle-1.jpg"
      }
    ],
    status: "processing",
    total: 16997,
    shippingAddress: {
      name: "Aarav Patel",
      line1: "12 Lake View Road",
      city: "Pune",
      state: "Maharashtra",
      postalCode: "411001",
      country: "India"
    },
    stripeSessionId: "cs_test_ord_1001",
    createdAt: new Date("2026-04-20T10:30:00.000Z")
  },
  {
    id: "ord-1002",
    userId: "user-1",
    items: [
      {
        productId: "p-003",
        name: "Urban Runner Shoes",
        price: 3599,
        quantity: 1,
        imageUrl: "/images/products/shoes-1.jpg"
      }
    ],
    status: "delivered",
    total: 3599,
    shippingAddress: {
      name: "Aarav Patel",
      line1: "12 Lake View Road",
      city: "Pune",
      state: "Maharashtra",
      postalCode: "411001",
      country: "India"
    },
    stripeSessionId: "cs_test_ord_1002",
    createdAt: new Date("2026-04-11T09:15:00.000Z")
  }
];
