import { Suspense } from "react";
import { getBookById } from "./functions";
import { SearchForm } from "./search-form";

export async function SearchFormWrapper({ selectedBook }) {
  const fullBook = selectedBook ? await getBookById(selectedBook) : undefined;

  return (
    <Suspense
      fallback={
        <div className="h-48 animate-pulse bg-gray-50 border rounded-md" />
      }
    >
      <SearchForm providedBook={fullBook} />
    </Suspense>
  );
}
