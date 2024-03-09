import { ArticleCard } from "@/components/article-card";
import { Header } from "@/components/header";
import { Heading, heading } from "@/components/ui/heading";
import { books } from "@/data/books";
import { credentials } from "@/data/credentials";
import { values } from "@/data/values";
import { classNames } from "@/functions/class-names";
import { getArticles } from "@/functions/markdown";
import Link from "next/link";

export const metadata = {
  title: "My Digital Garden - Curtis Fisher",
  alternates: {
    canonical: `/`,
  },
};

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="space-y-12">
      <Header>
        <Heading>
          <span className="block mb-4 text-xl font-medium">
            Hiya, I&apos;m Curtis Fisher 👋
          </span>
          Passionate advocate for{" "}
          <span className="text-green-500">ethical business</span>
          {", "}
          <span className="text-red-500">compassionate relationships</span>, and{" "}
          <span className="text-yellow-500">living well</span>.
        </Heading>
      </Header>
      <div className="space-y-16 mx-auto max-w-3xl px-6 lg:px-8">
        <section>
          <div
            className={classNames(
              "gap-x-2 mb-4 space-x-2",
              heading({ size: "h2" })
            )}
          >
            <h2 className="inline">Recent Stories</h2>
            <span className="opacity-50">/</span>
            <Link
              href="/blog"
              className="opacity-60 hover:underline underline-offset-4"
            >
              Explore Stories
            </Link>
          </div>
          <p className="mt-2 mb-6 opacity-80">
            A special place for my thoughts and opinions.
          </p>
          <div className="space-y-6">
            {articles
              .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
              .slice(0, 4)
              .map((article) => (
                <ArticleCard article={article} key={article.meta.title} />
              ))}
          </div>
        </section>
        <section>
          <Heading size="h2">Values.</Heading>
          <p className="mt-2 mb-6 opacity-80">
            These are fundamental to who I am and serve to guide my decison
            making.
          </p>
          <ul className="ml-4 space-y-2">
            {values.map((value) => (
              <li key={value}>✅ {value}</li>
            ))}
          </ul>
        </section>
        <section>
          <div
            className={classNames(
              "gap-x-2 mb-4 space-x-2",
              heading({ size: "h2" })
            )}
          >
            <h2 className="inline">Favorite Books</h2>
            <span className="opacity-50">/</span>
            <Link
              href="/books"
              className="opacity-60 hover:underline underline-offset-4"
            >
              Explore Books
            </Link>
          </div>

          <p className="mt-2 mb-6 opacity-80">
            A selection of the best five books I&apos;ve read.
          </p>
          <ul className="ml-4 space-y-2">
            {books
              .sort((a, b) => b.score - a.score)
              .map((book) => (
                <li key={book.title}>{`${book.title} – ⭐ ${book.score}`}</li>
              ))
              .slice(0, 5)}
          </ul>
        </section>
        <section>
          <div
            className={classNames(
              "gap-x-2 mb-4 space-x-2",
              heading({ size: "h2" })
            )}
          >
            <h2 className="inline">Recent Experience</h2>
            <span className="opacity-50">/</span>
            <Link
              href="/credentials"
              className="opacity-60 hover:underline underline-offset-4"
            >
              Explore Experiences
            </Link>
          </div>
          <p className="mt-2 mb-6 opacity-80">
            The skills and wisdom I&apos;ve aquired through work.
          </p>
          <ul className="ml-4 space-y-2">
            {credentials.slice(0, 5).map((credential) => (
              <li
                key={
                  credential.role + credential.startDate + credential.endDate
                }
              >
                {credential.role}{" "}
                <span className="opacity-60">@ {credential.company}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: 5,
  },
  {
    id: 2,
    title: "Test Blog Article 2",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: 5,
  },
  {
    id: 3,
    title: "The Art of Pruining",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: 5,
  },
  // More posts...
];
