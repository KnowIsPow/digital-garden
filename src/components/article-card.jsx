import { ArticleTime } from "@/components/article-time";
import Link from "next/link";
import { Heading, heading } from "./ui/heading";
import {
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "@/functions/class-names";

export function ArticleCard({ article }) {
  return (
    <article key={article.title} className="relative group">
      <Link
        href={`/blog/${article.meta.slug}`}
        className="group/link md:visited:no-underline"
      >
        <div className="lowercase flex justify-between items-center">
          <div className="absolute md:block hidden text-black group-visited/link:text-white dark:text-white dark:group-visited/link:text-black -translate-x-6">
            <EyeSlashIcon className="w-4 h-4" />
          </div>
          <div
            className={classNames(
              heading({ size: "h3" }),
              "text-gray-900 dark:text-gray-50 group-hover:underline underline-offset-8"
            )}
          >
            <h3 className="inline">{article.meta.title}</h3>
            <span className="md:hidden opacity-70 group-visited/link:text-white dark:text-white dark:group-visited/link:text-black ml-1 text-sm">
              - unread
            </span>
          </div>

          <ArticleTime
            className="italic group-hover:underline underline-offset-8 text-right"
            date={article.meta.date}
          />
        </div>
      </Link>
    </article>
  );
}
