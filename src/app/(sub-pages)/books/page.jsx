import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { books } from "@/data/books";

export const metadata = {
  title: "Book Recommendations",
  description:
    "A priority ordered list of the books I've read to date. Note that these scores are based on what current Curtis thinks of the books.",
  openGraph: {
    title: "Book Recommendations - Curtis Fisher",
    description:
      "A priority ordered list of the books I've read to date. Note that these scores are based on what current Curtis thinks of the books.",
    url: "https://www.curtisfisher.com/books",
  },
  alternates: {
    canonical: `/books`,
  },
};

export default async function BooksPage() {
  return (
    <>
      <Header color="green">
        <h1 className="lowercase mb-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Book Recommendations.
        </h1>
        <p className="text-white/90">
          A priority ordered list of the books I&apos;ve read to date. Note that
          these scores are based on what current Curtis thinks of the books. At
          certain times, some of these books had a profound impact on my
          thinking and past Curtis may have ranked them higher for the role they
          served. The books at the top of this list tend to apply to everyday
          situations, while the books near the bottom tend to scratch specific
          itches (or they&apos;re outright not amazing).
        </p>
      </Header>

      <Content as="section">
        <ul className="space-y-6">
          {books
            .sort((a, b) => b.score - a.score)
            .map((book) => (
              <li key={book.title}>
                <h2 className="font-medium">{`${book.title} – ⭐ ${book.score}`}</h2>
                <p className="text-gray-600">{book.keyTakeaway}</p>
              </li>
            ))}
        </ul>
      </Content>
    </>
  );
}
