import './globals.css';

export const metadata = {
  title: {
    default: 'Curtis Fisher',
    template: '%s | Curtis Fisher',
  },
  description:
    "Welcome to my digital garden It's all about growing excitement, learning tech, and sharing the resources and lessons I've discovered along the way.",
  openGraph: {
    title: 'Curtis Fisher',
    description:
      "Welcome to my digital garden It's all about growing excitement, learning tech, and sharing the resources and lessons I've discovered along the way.",
    url: 'https://www.curtisfisher.com',
    siteName: 'Curtis Fisher - Digital Garden',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curtis Fisher - Digital Garden',
    description:
      "Welcome to my digital garden It's all about growing excitement, learning tech, and sharing the resources and lessons I've discovered along the way.",
    creator: '@curtiscandid',
  },
  creator: 'Curtis Fisher',
  publisher: 'Curtis Fisher',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/shortcut-icon.png',
    apple: [{ url: '/apple-touch-icon.png', sizes: '152x152', type: 'image/png' }],
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#1d4ed8',
    },
  },
  manifest: '/site.webmanifest',
  themeColor: 'white',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-6 lg:px-8">
        <main className="mx-auto max-w-7xl">{children}</main>
        <footer className="max-w-2xl py-12 mx-auto space-y-6 ">
          <p className="text-gray-600">
            I&apos;m working to grow this digital garden. Please excuse the appearance and noted
            lack of resources as I have only just planted the seeds.
          </p>
          <p className="text-gray-400">made with ❤️ in boston.</p>
        </footer>
      </body>
    </html>
  );
}
