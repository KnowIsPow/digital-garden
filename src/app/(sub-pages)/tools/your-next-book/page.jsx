import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { BookPreview } from "./book-preview";
import { Configuration, OpenAIApi } from "openai-edge";
import { Suspense } from "react";
import { SearchForm } from "./search-form";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

async function getRecommendations(...books) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            'You are a expert librarian who can suggest books based on what a user is looking for.\n\nYou will be supplied a list of books along with a task to perform on the books and a quantity following the task.  The task will be one of the following\n\nSimilar\n- List books that are similar in theme and messaging to the supplied list of books but created by a different author\n\nExplore\n- List books that are similar in writing style but different in theme and messaging to the list of supplied books. \n\nFor example "Explore 10" would mean perform the Explore operation and return 10 books. If no quantity is given, default to 5 books returned.\n\nYou responses should be in valid JSON notation structured as a list of book titles and two or three sentence reasons for the recommendation and why the reader might enjoy it if they enjoyed the supplied book(s).\n\nHere is an example:\n[{title: "Subtle art of Not Giving a F*ck", reason: \'"}, {title: "Lord of the flies", reason: ""}]\n\nPlease do not list the author names as part of the titles. Please do not repeat the same book in your recommendations.',
        },
        {
          role: "user",
          content: books.join(", "),
        },
        {
          role: "user",
          content: "Similar 3",
        },
      ],
      temperature: 0.1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const jsonResponse = await response.json();
    return JSON.parse(jsonResponse.choices[0].message.content);
  } catch (error) {
    console.error("Failed to fetch recommendations:", error);
    throw error; // Re-throw the error to handle it in the UI if needed
  }
}

export default async function YourNextBookPage({ searchParams }) {
  const book = searchParams?.book || undefined;

  return (
    <>
      <Header color="green">
        <h1 className="lowercase mb-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          What should I read next?
        </h1>
        <p className="text-white/90">
          Picking your next book can be challenging. This tool encourages you to
          first decide a general purpose for reading another book, and then uses
          books you have read in the past to generate recommendations on books
          you may like that accomplish your goal.
        </p>
      </Header>
      <Content className="md:bg-white md:shadow-lg h-full mx-auto md:-translate-y-24 md:border py-8 space-y-4">
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
        <SearchForm />
      </Content>
      {book && (
        <Content className="-translate-y-24">
          <Suspense key={book} fallback={<LoadingListOfBooks />}>
            <ListOfBooks seed={searchParams.book} />
          </Suspense>
        </Content>
      )}
    </>
  );
}

async function getBook(keyword) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?maxResults=1&fields=items(volumeInfo)&q=${encodeURIComponent(
      keyword
    )}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch book data");
  }
  const jsonResponse = await res.json();
  return jsonResponse.items[0].volumeInfo;
}

async function ListOfBooks({ seed }) {
  try {
    const books = await getRecommendations(seed);

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
      {Array.from({ length: 3 }, (_, i) => i + 1).map((idx) => (
        <div
          key={idx}
          className="h-48 animate-pulse bg-gray-50 border rounded-md"
        />
      ))}
    </div>
  );
}
