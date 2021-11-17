export function BlogGridListing({ article }) {
  return (
    <article className="shadow p-4 border border-transparent hover:border-black cursor-pointer bg-white">
      <h2 className="display display-md">{article.title}</h2>
      <p className="body mt-2">{article.description}</p>
    </article>
  );
}
