import { ArticleTime } from "@/components/article-time";
import { BackToMainPage } from "@/components/back-button";
import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { getArticle } from "@/functions/markdown";
import { notFound } from "next/navigation";

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
      url: `/${params.slug}`,
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
      <Header color="blue">
        <div className="mb-4 text-blue-400">
          <BackToMainPage />
        </div>
        <h1 className="lowercase mb-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          {meta.title}
        </h1>
        <p className="text-blue-100">
          <ArticleTime date={meta.date} /> -{" "}
          <span className="opacity-70">{meta.readingTime} Minute Read</span>
        </p>
      </Header>
      <Content className="space-y-12">
        <article className="max-w-full px-0 prose md:prose-lg">
          {content}
        </article>
      </Content>
    </>
  );
}
