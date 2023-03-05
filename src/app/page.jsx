import { ArticleCard } from '@/components/article-card';
import { ArticleTime } from '@/components/article-time';
import { books } from '@/data/books';
import { experiences } from '@/data/experiences';
import { values } from '@/data/values';
import { getArticles } from '@/functions/markdown';

import Link from 'next/link';

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
      <header className="pb-10 mb-10 border-b border-gray-200 sm:mb-16 sm:pb-16">
        <h1 className="text-4xl font-bold tracking-tight text-blue-700 lowercase sm:text-6xl">
          Hiya, I&apos;m Curtis Fisher 👋
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          Welcome to my digital garden 🌱 It&apos;s all about growing excitement, learning tech, and
          sharing the resources and lessons I&apos;ve discovered along the way.
        </p>
      </header>
      <section className="space-y-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-blue-700 lowercase sm:text-4xl">
            Recent Articles.
          </h2>
          <p className="mt-2 mb-6 text-gray-700">A special place for my thoughts and opinions.</p>
          <div className="space-y-12">
            {articles
              .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
              .slice(0, 3)
              .map((article) => (
                <ArticleCard article={article} key={article.meta.title} />
              ))}
            <div className="text-blue-400 hover:underline">
              <Link href="/blog">View More Blog Articles</Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-blue-700 lowercase sm:text-4xl">
            Values.
          </h2>
          <p className="mt-2 mb-6 text-gray-700">
            These are fundamental to who I am and serve to guide my decison making.
          </p>
          <ul className="space-y-2">
            {values.map((value) => (
              <li key={value}>✅ {value}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-blue-700 lowercase sm:text-4xl">
            Book Recommendations.
          </h2>
          <p className="mt-2 mb-6 text-gray-700">
            A selection of the best five books I&apos;ve read.
          </p>
          <ul className="space-y-2">
            {books
              .sort((a, b) => b.score - a.score)
              .map((book) => <li key={book.title}>{`${book.title} – ⭐ ${book.score}`}</li>)
              .slice(0, 5)}
          </ul>
          <div className="mt-12 text-blue-400 hover:underline">
            <Link href="/books">View More Book Recommendations</Link>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-blue-700 lowercase sm:text-4xl">
            Recent Projects & Experiences.
          </h2>
          <p className="mt-2 mb-6 text-gray-700">
            The skills and wisdom I&apos;ve aquired through work.
          </p>
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
