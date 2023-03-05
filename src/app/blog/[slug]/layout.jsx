import { ArticleCard } from '@/components/article-card';
import { getArticles } from '@/functions/markdown';
import Link from 'next/link';

export default async function ArticleLayout({ children }) {
  const articles = await getArticles();

  return (
    <div className="relative max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
      {children}
      <div className="pt-16 mt-16 border-t border-gray-200">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 text-blue-700 lowercase sm:text-4xl">
          Recent Articles.
        </h2>
        <div className="space-y-12">
          {articles
            .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
            .slice(0, 3)
            .map((article) => (
              <ArticleCard article={article} key={article.meta.title} />
            ))}
        </div>
        <div className="mt-12 text-lg text-gray-400 lowercase hover:underline">
          <Link href="/">Back To Main Page</Link>
        </div>
      </div>
    </div>
  );
}
