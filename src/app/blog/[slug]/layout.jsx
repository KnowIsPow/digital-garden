import { ArticleCard } from "@/components/article-card";
import { Content } from "@/components/content";
import { NewsletterForm } from "@/components/snippets/newsletter";
import Wide from "@/components/ui/formatting/wide";
import { Heading, heading } from "@/components/ui/heading";
import { classNames } from "@/functions/class-names";
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
        <div
          className={classNames(
            "gap-x-2 mb-6 space-x-2 duration-200 sm:opacity-60 group-hover/recent:opacity-100",
            heading({ size: "h2" })
          )}
        >
          <h2 className="inline">Recent Stories</h2>
          <span className="opacity-60">/</span>
          <Link
            href="/blog"
            className="opacity-70 hover:underline underline-offset-4"
          >
            Explore Stories
          </Link>
        </div>
        <div className="space-y-6 duration-100 sm:opacity-60 group-hover/recent:opacity-100">
          {articles
            .filter((article) => article.meta.slug !== params.slug)
            .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
            .slice(0, 3)
            .map((article) => (
              <ArticleCard article={article} key={article.meta.title} />
            ))}
        </div>
      </Content>
    </div>
  );
}
