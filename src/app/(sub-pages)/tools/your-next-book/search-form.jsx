"use client";

import { Button } from "@/components/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BookPreview } from "./book-preview";
import { classNames } from "@/functions/class-names";
import { getBooks } from "./functions";

export function SearchForm({ providedBook }) {
  const pathname = usePathname();
  const { replace } = useRouter();

  const [books, setBooks] = useState([]);

  const [selectedBook, setSelectedBook] = useState(undefined);

  const [bookPreview, setBookPreview] = useState(providedBook || undefined);

  async function search(formData) {
    setBookPreview(selectedBook.volumeInfo);
    const params = new URLSearchParams();

    params.set("book", selectedBook.id);

    setBooks([]);
    replace(`${pathname}?${params.toString()}`);
  }

  const handleInputChange = async (event) => {
    const query = event.target.value;
    if (query.length > 0) {
      const result = await getBooks(query);
      setBooks(result.items);
    } else {
      setBooks([]);
    }
  };

  if (bookPreview) {
    return <BookPreview book={bookPreview} />;
  }

  return (
    <form action={search}>
      <input
        name="book"
        id="book"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Mans Search for Meaning"
        aria-describedby="book"
        required
        onChange={handleInputChange}
      />
      {books.length > 0 && (
        <ul className="space-y-2 py-4">
          {books.map((book, index) => {
            return (
              <li
                className={classNames(
                  selectedBook &&
                    selectedBook.id == book.id &&
                    "rounded-md bg-blue-50"
                )}
                onClick={() => setSelectedBook(book)}
                key={index}
              >
                <BookPreview book={book.volumeInfo} />
              </li>
            );
          })}
        </ul>
      )}
      <Button
        type="submit"
        className="w-full mt-4"
        variant="secondary"
        disabled={!selectedBook}
      >
        Recommend A Book
      </Button>
    </form>
  );
}
