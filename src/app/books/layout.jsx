import Link from 'next/link';

export default async function ArticleLayout({ children }) {
  return (
    <div className="relative max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
      {children}
      <div className="mt-12 text-lg text-gray-400 hover:underline">
        <Link href="/">Back To Main Page</Link>
      </div>
    </div>
  );
}
