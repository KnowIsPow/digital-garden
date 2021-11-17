import { BlogGridListing } from 'features/blog/grid-listing';

export function BlogGrid({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <BlogGridListing key={article.title} article={article} />
      ))}
    </div>
  );
}
