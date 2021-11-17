import { Navbar } from 'ui/layout/navbar';
import { Footer } from 'ui/layout/footer';

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
