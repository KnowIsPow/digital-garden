import { classNames } from "@/functions/class-names";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";

const calloutBackground = cva("relative my-12 rounded-lg border-l-4 p-8", {
  variants: {
    color: {
      green: "border-green-500 bg-green-500/30",
      blue: "border-blue-500 bg-blue-500/20",
      yellow: "border-yellow-500 bg-yellow-500/30",
    },
  },
  defaultVariants: {
    color: "green",
  },
});

const calloutIcon = cva("h-10 w-10", {
  variants: {
    color: {
      green: "text-green-500",
      blue: "text-blue-500",
      yellow: "text-yellow-500",
    },
  },
  defaultVariants: {
    color: "green",
  },
});

export function Callout({
  title = "Good to Know",
  children,
  color,
  icon = InformationCircleIcon,
}) {
  const Icon = icon;
  return (
    <div className="not-prose">
      <div className={classNames(calloutBackground({ color }))}>
        <div className="absolute left-0 top-0 -ml-7 -mt-7 rounded-full bg-white p-1">
          <Icon className={classNames(calloutIcon({ color }))} />
        </div>
        <p className="font-semibold md:text-lg lg:text-xl">{title}</p>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
