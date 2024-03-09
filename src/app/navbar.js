import { Button } from "@/components/button";
import { Content } from "@/components/content";
import { classNames } from "@/functions/class-names";
import Link from "next/link";

export function Navbar() {
  return (
    <Content as="div" className="py-8 gap-4 grid grid-cols-3 mb-12">
      <div className="col-span-1">
        <Link href="/" className="group font-bold">
          <span className="group-hover:hidden">curtis fisher.</span>
          <span className="hidden group-hover:block underline underline-offset-8">
            go to main page.
          </span>
        </Link>
      </div>
      <nav className="col-span-1 text-center mx-auto">
        <ul className="flex gap-x-8">
          {[
            { name: "stories", href: "/blog" },
            { name: "books", href: "/books" },
            { name: "connect", href: "/contact" },
          ].map((link) => (
            <li
              key={link.name}
              className="underline underline-offset-8 decoration-gray-200 hover:decoration-gray-600 duration-200"
            >
              <Link href={link.href}>{link.name}.</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="col-span-1 text-right">
        <Link href="/subscribe" className="group">
          <span className="group-hover:hidden">subscribe.</span>
          <span className="hidden group-hover:block underline underline-offset-8">
            subscribe!
          </span>
        </Link>
      </div>
    </Content>
  );
}
