import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { Heading } from "@/components/ui/heading";
import { books } from "@/data/books";
import Link from "next/link";

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
      <Header>
        <Heading className="mb-4">Book Recommendations.</Heading>
        <p>
          Occasionally, certain books profoundly impact my thinking. Higher
          ranked books are more universally good, while lower-ranked books were
          good for a particular purpose (or they&apos;re outright not amazing).
        </p>
      </Header>

      <Content as="section">
        <ul className="space-y-6">
          {books
            .sort((a, b) => b.score - a.score)
            .map((book) => (
              <li key={book.title} className="group">
                <Link href={book.link} target="_blank">
                  <h2 className="font-medium group-hover:underline">
                    {`${book.title} – ⭐ ${book.score}`}
                  </h2>
                  <p className="opacity-80">{book.keyTakeaway}</p>
                </Link>
              </li>
            ))}
        </ul>
      </Content>
    </>
  );
}
