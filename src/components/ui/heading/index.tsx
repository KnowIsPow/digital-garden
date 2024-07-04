import { classNames } from "@/functions/class-names";
import { cva } from "class-variance-authority";
import { createElement } from "react";

export const heading = cva("lowercase font-medium tracking-tight ", {
  variants: {
    size: {
      h1: "text-3xl sm:text-4xl",
      h2: "text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-400 lowercase sm:text-3xl",
      h3: "text-lg",
    },
  },
  defaultVariants: {
    size: "h1",
  },
});

export function Heading({ size, children, className, ...rest }) {
  const dynamicSize = size ? size : "h1";

  return createElement(
    dynamicSize,
    {
      className: classNames(heading({ size: dynamicSize }), className),
      ...rest,
    },
    children
  );
}
