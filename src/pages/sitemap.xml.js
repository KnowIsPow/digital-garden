import { formatISO } from 'date-fns';

export default function Sitemap({}) {}

function url({ href, updatedAt, changeFrequency = 'monthly', priority = 0.5 }) {
  return `<url>
      <loc>${process.env.NEXT_PUBLIC_HOST + href}</loc>
      <lastmod>${formatISO(new Date(updatedAt))}</lastmod>
      <changefreq>${changeFrequency}</changefreq>
      <priority>${priority}</priority>
    </url>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${url({ href: '/', updatedAt: '2021-11-19', changeFrequency: 'weekly', priority: 1 })}
      ${url({ href: '/about', updatedAt: '2021-11-19', changeFrequency: 'weekly', priority: 1 })}
      ${url({
        href: '/credentials',
        updatedAt: '2021-11-19',
        changeFrequency: 'weekly',
        priority: 1,
      })}
      ${url({ href: '/blog', updatedAt: '2021-11-19', changeFrequency: 'weekly', priority: 1 })}
      ${url({
        href: '/resources',
        updatedAt: '2021-11-19',
        changeFrequency: 'weekly',
        priority: 1,
      })}
      ${url({ href: '/contact', updatedAt: '2021-11-19', changeFrequency: 'weekly', priority: 1 })}


    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
