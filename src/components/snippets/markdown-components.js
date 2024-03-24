import { Callout } from "@/components/snippets/callout";
import Stat from "@/components/snippets/stat";
import Image from "next/image";
import Link from "next/link";
import Quote from "./quote";
import WageCalculator from "@/components/snippets/calculators/wages";
import MagicChecklist from "@/components/snippets/visualization/magic-checklist";
import Calendar from "@/components/calendar/";
import Wide from "@/components/ui/formatting/wide";
import { PinterestShare } from "../ui/pinterest-share";

export const markdownComponents = {
  img: (props) => (
    <span className="block relative group">
      <Image
        {...props}
        height={3000}
        width={1500}
        alt={props.alt}
        className="my-0 w-full rounded-lg object-contain"
      />
      <PinterestShare excerpt={props.alt} imageUrl={props.src} />
    </span>
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
  Quote,
  WageCalculator,
  MagicChecklist,
  Calendar,
  Wide,
};
