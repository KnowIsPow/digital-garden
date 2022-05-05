import { BlogGridListing } from 'features/blog/grid-listing';

export function BlogGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <BlogGridListing key={post.id} post={post} />
      ))}
    </div>
  );
}
