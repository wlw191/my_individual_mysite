import React from 'react';

const Header = () => (
  <header className="bg-primary text-white p-4">
    <h1 className="text-2xl font-bold">My Personal Site</h1>
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
