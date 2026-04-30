import type { Order } from "@/lib/types";

const ORDER_STEPS: Order["status"][] = ["pending", "processing", "shipped", "delivered"];

interface OrderTimelineProps {
  readonly status: Order["status"];
}

export function OrderTimeline({ status }: OrderTimelineProps): JSX.Element {
  const activeIndex = ORDER_STEPS.indexOf(status);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {ORDER_STEPS.map((step, index) => {
        const completed = index <= activeIndex;
        return (
          <div key={step} className="flex items-center gap-2">
            <span
              className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                completed ? "bg-primary text-white" : "bg-surface text-text-muted"
              }`}
            >
              {index + 1}
            </span>
            <span className={`text-xs uppercase tracking-wide ${completed ? "text-text-primary" : "text-text-muted"}`}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}
