import { ArticleCard } from "@/components/article-card";
import { Content } from "@/components/content";
import { NewsletterForm } from "@/components/snippets/newsletter";
import Wide from "@/components/ui/formatting/wide";
import { Heading } from "@/components/ui/heading";
import { getArticles } from "@/functions/markdown";
import Link from "next/link";

export default async function ArticleLayout({ params, children }) {
  const articles = await getArticles();

  return (
    <div className="space-y-8">
      {children}
      <Content>
        <Wide>
          <NewsletterForm />
        </Wide>
      </Content>
      <Content className="pt-8 border-t border-gray-200 group/recent">
        <Heading
          size="h2"
          className="mb-6 duration-200 sm:opacity-60 group-hover/recent:opacity-100"
        >
          Recent Stories.
        </Heading>
        <div className="space-y-6 duration-100 sm:opacity-60 group-hover/recent:opacity-100">
          {articles
            .filter((article) => article.meta.slug !== params.slug)
            .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
            .slice(0, 3)
            .map((article) => (
              <ArticleCard article={article} key={article.meta.title} />
            ))}
        </div>
        <div className="mt-8 text-lg text-gray-400 lowercase hover:underline">
          <Link href="/blog">Explore all Stories</Link>
        </div>
      </Content>
    </div>
  );
}
