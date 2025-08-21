'use client'; // Required for using next/link and potentially hooks for mobile menu

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-neutral-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="text-primary hover:text-red-700 transition-colors">
            Flann
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-lg pb-1 border-b-2 ${
                    pathname === link.href
                      ? 'border-primary text-white'
                      : 'border-transparent text-gray-400 hover:border-primary hover:text-white'
                  } transition-all duration-300`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-neutral-900 text-white p-4 mt-8 text-center">
    <p>&copy; {new Date().getFullYear()} 陈悦龙 (Flann). All Rights Reserved.</p>
  </footer>
);

// This Layout component wraps every page
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
