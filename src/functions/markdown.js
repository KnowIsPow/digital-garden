import { readFileSync, existsSync } from 'fs';
import { globSync } from 'glob';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH = path.join(process.cwd(), 'src/posts');

// get a list of article slugs
export function getSlugs() {
  const paths = globSync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split('.');
    return slug;
  });
}

export async function getArticle(slug) {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);

  if (!existsSync(postFilePath)) {
    return;
  }

  const source = readFileSync(postFilePath);

  const { content, frontmatter } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });

  return { content, meta: { ...frontmatter, slug } };
}

export async function getArticles() {
  return await Promise.all(getSlugs(POSTS_PATH).map(async (slug) => await getArticle(slug)));
}