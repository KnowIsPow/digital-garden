import { BackToMainPage } from '@/components/back-button';

export default async function BookLayout({ children }) {
  return (
    <div className="relative py-32 sm:py-48 lg:py-56">
      {children}
      <div className="mt-12">
        <BackToMainPage />
      </div>
    </div>
  );
}
