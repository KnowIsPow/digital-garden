import { ArticleTime } from "@/components/article-time";
import Link from "next/link";
import { Heading } from "./ui/heading";
import {
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

export function ArticleCard({ article }) {
  return (
    <article key={article.title} className="relative group">
      <Link href={`/blog/${article.meta.slug}`} className="group/link">
        <div className="lowercase flex justify-between items-center">
          <div className="absolute text-black group-visited/link:text-white dark:text-white dark:group-visited/link:text-black -translate-x-6">
            <EyeSlashIcon className="w-4 h-4" />
          </div>
          <Heading
            size="h3"
            className=" text-gray-900 dark:text-gray-50 group-hover:underline underline-offset-8"
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
