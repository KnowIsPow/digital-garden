import { Button } from "@/components/button";
import { Content } from "@/components/content";
import { classNames } from "@/functions/class-names";
import Link from "next/link";

export function Navbar() {
  return (
    <Content
      as="nav"
      className="flex text-white py-8 justify-between flex-col sm:flex-row items-center gap-4"
    >
      <Link href="/">
        <div className="text-xl">Curtis Fisher.</div>
      </Link>
      <nav className="flex md:text-lg lowercase gap-x-4 items-center">
        {[
          { name: "Blog", href: "/blog" },
          { name: "Books", href: "/books" },
          { name: "Credentials", href: "/credentials" },
          { name: "Contact", href: "/contact" },
        ].map(({ name, href, style }) => (
          <Link
            key={href}
            href={href}
            className={classNames(
              "hover:border-white/60 border-b-2 border-transparent duration-200 opacity-60 hover:opacity-100",
              style
            )}
          >
            {name}.
          </Link>
        ))}
        <Link href="/subscribe">
          <Button variant="outline">Subscribe</Button>
        </Link>
      </nav>
    </Content>
  );
}
