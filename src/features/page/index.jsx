import Head from 'next/head';

const siteName = 'Curtis Fisher';
const twitterHandle = '';

export default function Page({
  children,
  title = '',
  description = '',
  canonical = '',
  previewImage = '',
  noIndex = false,
}) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2b5797" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        {title && (
          <title>
            {title} | {siteName}
          </title>
        )}
        {description && <meta name="description" content={description} />}
        {canonical && <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOST}${canonical}`} />}
        {noIndex && <meta name="robots" content="noindex" />}

        {/* Twitter */}
        {twitterHandle && <meta name="twitter:card" content="summary" key="twcard" />}
        {twitterHandle && <meta name="twitter:creator" content={twitterHandle} key="twhandle" />}

        {/* Open Graph */}
        {canonical && (
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_HOST}${canonical}`}
            key="ogurl"
          />
        )}
        {previewImage && <meta property="og:image" content={previewImage} key="ogimage" />}
        {siteName && <meta property="og:site_name" content={siteName} key="ogsitename" />}
        {title && <meta property="og:title" content={title} key="ogtitle" />}
        {description && <meta property="og:description" content={description} key="ogdesc" />}
      </Head>
      {children}
    </>
  );
}
