export default function Robots({}) {}

export async function getServerSideProps({ res }) {
  const robots = `Sitemap: ${process.env.NEXT_PUBLIC_HOST}/sitemap.xml
User-agent: *
Allow: /*

Disallow: /api/*`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();

  return {
    props: {},
  };
}
