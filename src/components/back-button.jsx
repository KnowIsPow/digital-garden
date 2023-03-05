import Link from 'next/link';

export function BackToMainPage() {
  return (
    <Link className="text-lg text-gray-400 lowercase hover:underline" href="/">
      Back To Main Page
    </Link>
  );
}
