import { ArticleTime } from "@/components/article-time";
import Link from "next/link";

export function ArticleCard({ article }) {
  return (
    <article
      key={article.title}
      className="flex flex-col items-start border shadow-sm p-6 hover:border-blue-900"
    >
      <Link href={`/blog/${article.meta.slug}`}>
        <div className="flex items-center text-xs gap-x-4">
          <ArticleTime date={article.meta.date} />
        </div>
        <div className="relative group/article">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 lowercase group-hover/article:text-gray-600">
            <span className="absolute inset-0" />
            {article.meta.title}
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
            {article.meta.description}
          </p>
        </div>
      </Link>
    </article>
  );
}
