import Link from "next/link";

export function BackToMainPage() {
  return (
    <Link
      className="text-lg lowercase underline underline-offset-8 decoration-gray-200 hover:decoration-gray-600"
      href="/blog"
    >
      Explore All stories
    </Link>
  );
}
