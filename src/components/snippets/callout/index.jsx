import { classNames } from "@/functions/class-names";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";

const calloutBackground = cva("relative my-12 rounded-lg border-l-4 p-8", {
  variants: {
    color: {
      green: "border-green-400 bg-green-300/30",
      blue: "border-blue-400 bg-blue-300/20",
      yellow: "border-yellow-400 bg-yellow-300/30",
    },
  },
  defaultVariants: {
    color: "green",
  },
});

const calloutIcon = cva("h-10 w-10", {
  variants: {
    color: {
      green: "text-green-400",
      blue: "text-blue-400",
      yellow: "text-yellow-400",
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
        <div className="absolute left-0 top-0 -ml-7 -mt-7 rounded-full bg-white dark:bg-black p-1">
          <Icon className={classNames(calloutIcon({ color }))} />
        </div>
        <p className="font-semibold md:text-lg lg:text-xl">{title}</p>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
