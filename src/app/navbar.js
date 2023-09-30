import { Content } from "@/components/content";
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
      <nav className="flex md:text-lg lowercase gap-x-4">
        {[
          { name: "Blog", href: "/blog" },
          { name: "Books", href: "/books" },
          { name: "Projects", href: "/projects" },
          { name: "Credentials", href: "/credentials" },
          { name: "Contact", href: "/contact" },
        ].map(({ name, href }) => (
          <Link
            key={href}
            href={href}
            className="hover:border-white/60 border-b-2 border-transparent duration-200 opacity-60 hover:opacity-100"
          >
            {name}.
          </Link>
        ))}
      </nav>
    </Content>
  );
}
