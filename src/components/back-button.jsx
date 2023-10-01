import Link from "next/link";

export function BackToMainPage() {
  return (
    <Link className="text-lg lowercase hover:underline" href="/blog">
      Back To Main Page
    </Link>
  );
}
