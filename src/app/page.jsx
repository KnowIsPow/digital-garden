import { books } from '@/data/books';
import { experiences } from '@/data/experiences';
import { values } from '@/data/values';
import { getArticles } from '@/functions/markdown';
import { format } from 'date-fns';

import Link from 'next/link';

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
      <header className="pb-10 mb-10 border-b border-gray-200 sm:mb-16 sm:pb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hiya, I&apos;m Curtis Fisher 👋
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          Welcome to my digital garden 🌱 It&apos;s all about growing excitement, learning tech, and
          sharing the resources and lessons I&apos;ve discovered along the way.
        </p>
      </header>
      <section className="space-y-16">
        <div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recent Articles
          </h2>
          <div className="space-y-12">
            {articles
              .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
              .slice(0, 3)
              .map((article) => (
                <article
                  key={article.title}
                  className="flex flex-col items-start justify-between max-w-xl"
                >
                  <div className="flex items-center text-xs gap-x-4">
                    <time dateTime={article.meta.date} className="text-gray-500">
                      {format(new Date(article.meta.date), 'MMMM dd, yyyy')}
                    </time>
                  </div>
                  <div className="relative group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${article.meta.slug}`}>
                        <span className="absolute inset-0" />
                        {article.meta.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                      {article.meta.description}
                    </p>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Values
          </h2>
          <ul className="space-y-2">
            {values.map((value) => (
              <li key={value}>✅ {value}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Book Recommendations
          </h2>
          <ul className="space-y-2">
            {books
              .sort((a, b) => b.score - a.score)
              .map((book) => <li key={book.title}>{`${book.title} – ⭐ ${book.score}`}</li>)
              .slice(0, 5)}
          </ul>
          <div className="mt-4 text-blue-400 hover:underline">
            <Link href="/books">View More Book Recommendations</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recent Projects & Experiences
          </h2>
          <ul className="space-y-2">
            {experiences.slice(0, 5).map((experience) => (
              <li key={experiences.role + experiences.startDate + experiences.endDate}>
                {experience.role} – {experience.company}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: 5,
  },
  {
    id: 2,
    title: 'Test Blog Article 2',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: 5,
  },
  {
    id: 3,
    title: 'The Art of Pruining',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: 5,
  },
  // More posts...
];
