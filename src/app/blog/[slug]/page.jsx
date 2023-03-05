import { ArticleTime } from '@/components/article-time';
import { BackToMainPage } from '@/components/back-button';
import { getArticle } from '@/functions/markdown';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug);
  return {
    title: article.meta.metaTitle || article.meta.title,
    description: article.meta.description,
    openGraph: {
      title: article.meta.metaTitle || article.meta.title,
      description: article.meta.description,
      url: `https://www.curtisfisher.com/blog/${params.slug}`,
    },
  };
}

export default async function ArticlePage({ params }) {
  const { content, meta } = await getArticle(params.slug);

  if (!content) {
    notFound();
  }

  return (
    <>
      <header className="pb-10 mb-10 border-b border-gray-200 sm:mb-16 sm:pb-16">
        <div className="mb-6">
          <BackToMainPage />
        </div>
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-blue-700 lowercase sm:text-4xl">
          {meta.title}
        </h1>
        <ArticleTime date={meta.date} />
      </header>
      <article className="max-w-2xl px-0 mx-auto prose md:prose-lg">{content}</article>
    </>
  );
}
