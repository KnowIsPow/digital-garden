import Button from 'ui/form/button';
import Link from 'ui/link';

const navigation = [
  { label: 'about', href: '/about' },
  { label: 'credentials', href: '/credentials' },
  { label: 'blog', href: '/blog' },
  { label: 'resources', href: '/resources' },
];

export function Navbar({}) {
  return (
    <header className="py-4 border-b">
      <div className="section flex justify-between items-center">
        <Link href="/" className="display display-md lowercase hover:text-accent">
          Curtis Fisher
        </Link>
        <nav className="space-x-4 hidden md:block print:hidden">
          {navigation.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className="body border-b-2 border-transparent hover:border-primary p-2"
              >
                {link.label}.
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className="hidden md:block">
          <Button className="btn-secondary lowercase">Get in touch</Button>
        </Link>
        <Button className="btn-secondary md:hidden lowercase">Menu</Button>
      </div>
    </header>
  );
}
