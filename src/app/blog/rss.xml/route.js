import { getArticles } from "@/functions/markdown";
import Rss from "rss";

const SITE_URL = process.env.SITE_URL || "https://www.curtisfisher.com";

export async function GET() {
  const articles = await getArticles();

  const feed = new Rss({
    title: "Curtis Fisher's Blog",
    description:
      " A selection of thoughts, ideas, and reflections to help you think differently.",
    feed_url: `${SITE_URL}/blog/rss.xml`,
    site_url: SITE_URL,
    language: "en",
  });

  articles.forEach((article) => {
    feed.item({
      title: article.meta.title,
      description: article.meta.description,
      url: `${SITE_URL}/blog/${article.meta.slug}`,
      guid: `${SITE_URL}/blog/${article.meta.slug}`,
      date: new Date(article.meta.date),
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
