import { ArticleTime } from "@/components/article-time";
import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { heading } from "@/components/ui/heading";
import { classNames } from "@/functions/class-names";
import { getArticle, getArticles } from "@/functions/markdown";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.meta.slug }));
}

export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug);
  return {
    title: article.meta.metaTitle || article.meta.title,
    description: article.meta.description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: article.meta.metaTitle || article.meta.title,
      description: article.meta.description,
      url: `/blog/${params.slug}`,
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
      <Header>
        <div className={classNames("gap-x-2 mb-4 space-x-2", heading())}>
          <Link
            href="/blog"
            className="opacity-60 hover:underline underline-offset-4"
          >
            Stories
          </Link>
          <span className="opacity-50">/</span>
          <h1 className="inline">{meta.title}</h1>
        </div>
        <p className="lowercase">
          <ArticleTime date={meta.date} /> -{" "}
          <span className="opacity-70">{meta.readingTime} Minute Read</span>
        </p>
      </Header>
      <Content>
        <article className="max-w-full px-0 prose md:prose-lg dark:prose-invert">
          {content}
        </article>
      </Content>
    </>
  );
}
