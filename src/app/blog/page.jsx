import { ArticleCard } from "@/components/article-card";
import { BackToMainPage } from "@/components/back-button";
import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { getArticles } from "@/functions/markdown";

export const metadata = {
  title: "A Collection of Thoughts and Ideas",
  description:
    "A selection of writings and resources that I&apos;ve accumulated along my journey.",
  openGraph: {
    title: "A Collection of Thoughts and Ideas - Curtis Fisher",
    description:
      "A selection of writings and resources that I&apos;ve accumulated along my journey.",
    url: "https://www.curtisfisher.com/blog",
  },
  alternates: {
    canonical: `/blog`,
  },
};

export default async function BlogPage({ params }) {
  const articles = await getArticles(params.slug);

  return (
    <div className="space-y-12">
      <Header color="blue">
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          place for brain goops.
        </h1>
        <p className="text-blue-100">
          A selection of thoughts, ideas, and reflections to delight the
          introspective spirit.
        </p>
      </Header>
      <Content as="section" className="space-y-6">
        {articles
          .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
          .map((article) => (
            <ArticleCard article={article} key={article.meta.title} />
          ))}
      </Content>
    </div>
  );
}
