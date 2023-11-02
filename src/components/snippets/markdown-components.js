import { Callout } from "@/components/snippets/callout";
import Stat from "@/components/snippets/stat";
import Image from "next/image";
import Link from "next/link";
import Chart from "@/app/chart";
import Quote from "./quote";
import WageCalculator from "@/components/snippets/calculators/wages";

export const markdownComponents = {
  img: (props) => (
    <Image
      {...props}
      height={3000}
      width={1500}
      alt={props.alt}
      className="my-0 w-full rounded-lg object-contain"
    />
  ),
  a: ({ href, children }) => {
    // is an internal link
    if (href.includes("curtisfisher.com") || !href.includes("://")) {
      return <Link href={href}>{children}</Link>;
    }

    // is an external link
    return (
      <a href={href} target="_blank" rel="nofollow">
        {children}
      </a>
    );
  },
  Callout,
  Stat,
  Chart,
  Quote,
  WageCalculator,
};
