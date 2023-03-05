import { ArticleCard } from '@/components/article-card';
import { ArticleTime } from '@/components/article-time';
import { BackToMainPage } from '@/components/back-button';
import { getArticles } from '@/functions/markdown';
import { format } from 'date-fns';
import Link from 'next/link';

export default async function BlogPage({ params }) {
  const articles = await getArticles(params.slug);

  return (
    <div className="relative max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
      <header className="pb-10 mb-10 border-b border-gray-200 sm:mb-16 sm:pb-16">
        <div className="mb-6">
          <BackToMainPage />
        </div>
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-blue-700 lowercase sm:text-4xl">
          Blog.
        </h1>
        <p className="text-gray-500">
          A selection of writings and resources that I&apos;ve accumulated along my journey.
        </p>
      </header>
      <div className="space-y-12">
        {articles
          .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
          .map((article) => (
            <ArticleCard article={article} key={article.meta.title} />
          ))}
      </div>
    </div>
  );
}
