import { ArticleCard } from '@/components/article-card';
import { getArticles } from '@/functions/markdown';
import Link from 'next/link';

export default async function ArticleLayout({ children }) {
  const articles = await getArticles();

  return (
    <div className="relative py-32 sm:py-48 lg:py-56">
      {children}
      <div className="pt-16 mt-16 border-t border-gray-200 group/recent">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-700 lowercase duration-200 sm:text-4xl opacity-60 group-hover/recent:opacity-100">
          Recent Articles.
        </h2>
        <div className="space-y-12 duration-100 opacity-60 group-hover/recent:opacity-100">
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
