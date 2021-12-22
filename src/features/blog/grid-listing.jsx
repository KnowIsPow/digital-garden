import { format } from 'date-fns';
import Image from 'ui/image';
import Link from 'ui/link';

export function BlogGridListing({ post }) {
  return (
    <Link
      href={'/blog/' + post.slug}
      className="shadow border border-transparent hover:border-black"
    >
      <article>
        <div className="flex-shrink-0">
          <Image className="h-48 w-full object-cover" src={post.feature_image} alt={''} />
        </div>
        <div className="p-4 space-y-2">
          <h2 className="text-lg">{post.title}</h2>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time dateTime={post.published_at}>
              {Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }).format(new Date(post.published_at))}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.reading_time} minute read</span>
          </div>
          <p className="line-clamp-3">{post.custom_excerpt || post.excerpt}</p>
        </div>
      </article>
    </Link>
  );
}
