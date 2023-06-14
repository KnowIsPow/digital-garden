import { BackToMainPage } from "@/components/back-button";
import { books } from "@/data/books";

export const metadata = {
  title: "Book Recommendations",
  description:
    "A carefully curated (and priority ordered) selection of my top book recommendations. It's a short list for now, but soon I'll add summaries for each of them.",
  openGraph: {
    title: "Book Recommendations - Curtis Fisher",
    description:
      "A carefully curated (and priority ordered) selection of my top book recommendations. It's a short list for now, but soon I'll add summaries for each of them.",
    url: "https://www.curtisfisher.com/books",
  },
  alternates: {
    canonical: `/books`,
  },
};

export default async function BooksPage() {
  return (
    <>
      <header className="pb-10 mb-10 border-b border-gray-200 sm:mb-16 sm:pb-16">
        <div className="mb-6">
          <BackToMainPage />
        </div>
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-blue-700 lowercase sm:text-4xl">
          Book Recommendations.
        </h1>
        <p className="text-gray-500">
          A carefully curated (and priority ordered) selection of my top book
          recommendations. Note that these scores are (currently) based on
          current impressions of the book. At certain times, some of these books
          had a profound impact on my thinking. I aim to read books when they
          are most needed. The books at the top of this list tend to apply to
          everyday situations, while the books near the bottom tend to be more
          niche (or they're outright not amazing).
        </p>
      </header>

      <ul className="space-y-4">
        {books
          .sort((a, b) => b.score - a.score)
          .map((book) => (
            <li key={book.title}>
              <h2 className="font-medium">{`${book.title} – ⭐ ${book.score}`}</h2>
              <p className="text-gray-600">{book.keyTakeaway}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
