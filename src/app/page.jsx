import { ArticleCard } from "@/components/article-card";
import { books } from "@/data/books";
import { credentials } from "@/data/credentials";
import { values } from "@/data/values";
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
    <div className="py-32 sm:py-48 lg:py-56">
      <header className="pb-10 mb-10 border-b border-gray-200 sm:mb-16 sm:pb-16">
        <h1 className="text-4xl font-bold tracking-tight text-blue-700 lowercase sm:text-6xl">
          Hiya, I&apos;m <span className="block">Curtis Fisher 👋</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          Welcome to my digital garden 🌱 It&apos;s all about growing
          excitement, learning tech, and sharing the resources and lessons
          I&apos;ve discovered along the way.
        </p>
        <div className="flex mt-6 text-lg lowercase gap-x-4">
          <Link className="text-blue-500 hover:underline" href="/blog">
            Blog.
          </Link>
          <Link className="text-blue-500 hover:underline" href="/books">
            Books.
          </Link>
          <Link className="text-blue-500 hover:underline" href="/projects">
            Projects.
          </Link>
          <Link className="text-blue-500 hover:underline" href="/credentials">
            Credentials.
          </Link>
          <Link className="text-blue-500 hover:underline" href="/contact">
            Contact.
          </Link>
        </div>
      </header>
      <section className="space-y-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-blue-700 lowercase sm:text-4xl">
            Recent Articles.
          </h2>
          <p className="mt-2 mb-6 text-gray-700">
            A special place for my thoughts and opinions.
          </p>
          <div className="space-y-12">
            {articles
              .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
              .slice(0, 3)
              .map((article) => (
                <ArticleCard article={article} key={article.meta.title} />
              ))}
            <div className="text-blue-500 hover:underline">
              <Link href="/blog">View More Blog Articles</Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-blue-700 lowercase sm:text-4xl">
            Values.
          </h2>
          <p className="mt-2 mb-6 text-gray-700">
            These are fundamental to who I am and serve to guide my decison
            making.
          </p>
          <ul className="ml-4 space-y-2">
            {values.map((value) => (
              <li key={value}>✅ {value}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-blue-700 lowercase sm:text-4xl">
            Book Recommendations.
          </h2>
          <p className="mt-2 mb-6 text-gray-700">
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
          <div className="mt-12 text-blue-500 hover:underline">
            <Link href="/books">View More Book Recommendations</Link>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-blue-700 lowercase sm:text-4xl">
            Recent Projects & Experiences.
          </h2>
          <p className="mt-2 mb-6 text-gray-700">
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
                <span className="text-gray-500">@ {credential.company}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-blue-500 hover:underline">
            <Link href="/credentials">View Full Credentials</Link>
          </div>
        </div>
      </section>
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
