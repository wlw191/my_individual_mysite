import Link from 'next/link';
import React from 'react';

const Header = () => (
  <header className="bg-neutral-900 border-b border-neutral-800 text-white p-4 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-primary hover:text-red-700 transition-colors">
        MySite
      </Link>
      <nav>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </li>
          <li>
            <Link href="/articles" className="hover:text-primary transition-colors">Articles</Link>
          </li>
          <li>
            <Link href="/timeline" className="hover:text-primary transition-colors">Timeline</Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-primary text-white p-4 mt-8">
    <p>&copy; 2024 My Personal Site</p>
  </footer>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
