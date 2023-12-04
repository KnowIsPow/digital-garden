import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { BookPreview } from "./book-preview";
import { Suspense } from "react";
import { SearchForm } from "./search-form";
import { getBook, getBookById, getRecommendations } from "./functions";
import { SearchFormWrapper } from "./search-form-wrapper";
import { Button } from "@/components/button";

export default async function YourNextBookPage({ searchParams }) {
  const selectedBook = searchParams?.book || undefined;

  return (
    <>
      <Header color="green">
        <h1 className="lowercase mb-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          What should I read next?
        </h1>
        <p className="text-white/90">
          Picking your next book can be challenging. This tool encourages you
          use books you have read in the past to generate recommendations on new
          books.
        </p>
      </Header>
      <Content className="md:bg-white md:shadow-lg h-full mx-auto md:-translate-y-24 md:border py-8 space-y-4 rounded-md">
        <p className="font-medium">
          Which book would you like to find similar books for?
        </p>
        {/* <BookApproach /> */}
        {/* <ul className="space-y-4 mt-6">
          {Array.from({ length: 1 }, (_, i) => i + 1).map((idx) => (
            <li
              key={idx}
              className="relative border border-dashed h-24 flex justify-center items-center text-gray-400 hover:border-solid hover:text-gray-600"
            >
              Add Starting Book +
            </li>
          ))}
        </ul> */}
        <SearchFormWrapper selectedBook={selectedBook} />
      </Content>
      {selectedBook && (
        <Content className="-translate-y-24">
          <Suspense key={selectedBook} fallback={<LoadingListOfBooks />}>
            <h2 className="text-lg font-medium sm:text-2xl mb-4">
              Recommendations
            </h2>
            <ListOfBooks seedBookId={selectedBook} />
          </Suspense>
        </Content>
      )}
    </>
  );
}

async function ListOfBooks({ seedBookId }) {
  try {
    const book = await getBookById(seedBookId);

    const books = await getRecommendations(
      `${book.title}${book.subtitle && `: ${book.subtitle}`}`
    );

    const expandedBooks = await Promise.all(
      books.map((book) => getBook(book.title))
    );

    return (
      <div className="space-y-4">
        {expandedBooks.map((book, index) => (
          <BookPreview
            key={books[index].title}
            book={book}
            reason={books[index].reason}
          />
        ))}
        <div className="text-center pt-4">
          <Button variant="outline">Generate Another</Button>
        </div>
      </div>
    );
  } catch (e) {
    return (
      <div class="relative h-48 rounded-lg bg-red-800">
        <div class="p-4 absolute inset-0 flex items-center justify-center text-white text-xl">
          <p>
            The input provided could not be used to generate a list of books.
          </p>
        </div>
      </div>
    );
  }
}

function LoadingListOfBooks() {
  return (
    <div className="space-y-4">
      <div className="h-12 animate-pulse bg-gray-100 border rounded-md mb-4" />
      <div className="h-48 animate-pulse bg-gray-100 border rounded-md" />
    </div>
  );
}
