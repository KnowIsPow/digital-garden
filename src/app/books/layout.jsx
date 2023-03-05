import { BackToMainPage } from '@/components/back-button';

export default async function ArticleLayout({ children }) {
  return (
    <div className="relative max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
      {children}
      <div className="mt-12">
        <BackToMainPage />
      </div>
    </div>
  );
}
