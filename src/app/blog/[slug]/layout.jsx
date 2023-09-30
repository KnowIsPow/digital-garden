import { ArticleCard } from "@/components/article-card";
import { Content } from "@/components/content";
import { getArticles } from "@/functions/markdown";
import Link from "next/link";

export default async function ArticleLayout({ params, children }) {
  const articles = await getArticles();

  return (
    <div className="space-y-12">
      {children}
      <Content className="pt-12 border-t border-gray-200 group/recent">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-700 lowercase duration-200 sm:text-4xl sm:opacity-60 group-hover/recent:opacity-100">
          Recent Articles.
        </h2>
        <div className="space-y-6 duration-100 sm:opacity-60 group-hover/recent:opacity-100">
          {articles
            .filter((article) => article.meta.slug !== params.slug)
            .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
            .slice(0, 3)
            .map((article) => (
              <ArticleCard article={article} key={article.meta.title} />
            ))}
        </div>
        <div className="mt-12 text-lg text-gray-400 lowercase hover:underline">
          <Link href="/">Back To Main Page</Link>
        </div>
      </Content>
    </div>
  );
}
