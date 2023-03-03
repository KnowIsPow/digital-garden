import './globals.css';

export const metadata = {
  title: 'Curtis Fisher',
  description:
    "Welcome to my digital garden It's all about growing excitement, learning tech, and sharing the resources and lessons I've discovered along the way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
