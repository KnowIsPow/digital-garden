import { getArticles } from '@/functions/markdown';
import { format } from 'date-fns';
import Link from 'next/link';

export default async function ArticleLayout({ children }) {
  const articles = await getArticles();

  return (
    <div className="relative max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
      {children}
      <div className="pt-16 mt-16 border-t border-gray-200">
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
        <div className="mt-12 text-lg text-gray-400 hover:underline">
          <Link href="/">Back To Main Page</Link>
        </div>
      </div>
    </div>
  );
}
