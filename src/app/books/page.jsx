import { books } from '@/data/books';
import Link from 'next/link';

export default async function BooksPage({ params }) {
  return (
    <>
      <header className="pb-10 mb-10 border-b border-gray-200 sm:mb-16 sm:pb-16">
        <div className="mb-6 text-lg text-gray-400 hover:underline">
          <Link href="/">Back To Main Page</Link>
        </div>
        <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-4xl">Book Recommendations</h1>
        <p className="text-gray-500">
          A carefully curated (and priority ordered) selection of my top book recommendations. It's
          a short list for now, but soon I'll categorize these by learning goals and rank each book
          within its category.
        </p>
      </header>

      <ul className="space-y-2">
        {books
          .sort((a, b) => b.score - a.score)
          .map((book) => (
            <li key={book.title}>{`${book.title} – ⭐ ${book.score}`}</li>
          ))}
      </ul>
    </>
  );
}
