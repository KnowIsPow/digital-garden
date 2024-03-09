import { ArticleTime } from "@/components/article-time";
import Link from "next/link";
import { Heading } from "./ui/heading";

export function ArticleCard({ article }) {
  return (
    <article key={article.title} className="relative group">
      <Link href={`/blog/${article.meta.slug}`} className="group/link">
        <div className="absolute text-white group-visited/link:text-black -translate-x-5">
          x
        </div>

        <div className="lowercase flex justify-between items-center">
          <Heading
            size="h3"
            className=" text-gray-900 group-hover:underline underline-offset-8"
          >
            {article.meta.title}
          </Heading>
          <ArticleTime
            className="italic group-hover:underline underline-offset-8"
            date={article.meta.date}
          />
        </div>
      </Link>
    </article>
  );
}
