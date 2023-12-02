"use client";

import { Button } from "@/components/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SearchForm() {
  const pathname = usePathname();
  const { replace } = useRouter();

  async function search(formData) {
    const params = new URLSearchParams();

    const book = formData.get("book");
    params.set("book", book);

    replace(`${pathname}?${params.toString()}`);
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
      />
      <Button type="submit" className="w-full mt-4" variant="secondary">
        Search
      </Button>
    </form>
  );
}
