import { getArticle } from '@/functions/markdown';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug);
  return {
    title: article.meta.metaTitle || article.meta.title,
    description: article.meta.description,
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
        <div className="mb-6 text-lg text-gray-400 hover:underline">
          <Link href="/">Back To Main Page</Link>
        </div>
        <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-4xl">{meta.title}</h1>
        <time dateTime={meta.date} className="text-gray-500">
          {format(new Date(meta.date), 'MMMM dd, yyyy')}
        </time>
      </header>
      <article className="max-w-2xl px-0 mx-auto prose md:prose-lg">{content}</article>
    </>
  );
}
