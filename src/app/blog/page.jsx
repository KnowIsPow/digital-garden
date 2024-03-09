import { ArticleCard } from "@/components/article-card";
import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { Heading } from "@/components/ui/heading";
import { getArticles } from "@/functions/markdown";

export const metadata = {
  title: "A Collection of Thoughts and Ideas",
  description:
    "A selection of thoughts, ideas, and reflections to help you think differently.",
  openGraph: {
    title: "A Collection of Thoughts and Ideas - Curtis Fisher",
    description:
      "A selection of thoughts, ideas, and reflections to help you think differently.",
    url: "https://www.curtisfisher.com/blog",
  },
  alternates: {
    canonical: `/blog`,
  },
};

export default async function BlogPage({ params }) {
  const articles = await getArticles(params.slug);

  return (
    <div className="space-y-8">
      <Header>
        <Heading className="mb-4">place for brain goops.</Heading>
        <p>
          A selection of thoughts, ideas, and reflections to help you think
          differently.
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
