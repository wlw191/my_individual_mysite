import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'A list of articles on various topics.',
};

// Define the type for an article
interface Article {
  id: number;
  title: string;
  content: string;
  likes: number;
  created_at: string;
}

// This is a server component, so we can fetch data directly.
// In a real environment, this URL must be the absolute public URL of the deployment.
async function getArticles(): Promise<Article[]> {
  try {
    // Using a placeholder for the environment variable. This needs to be set.
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${apiUrl}/api/articles`, {
      cache: 'no-store', // Ensures the data is always fresh on every request
    });

    if (!res.ok) {
      console.error(`Failed to fetch articles. Status: ${res.status}`);
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('An error occurred while fetching articles:', error);
    return [];
  }
}

const ArticlesPage = async () => {
  const articles = await getArticles();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Articles</h1>

      {articles.length === 0 ? (
        <p className="text-center text-neutral-400">No articles have been posted yet. Please check back later.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="border border-neutral-700 rounded-lg p-6 flex flex-col justify-between shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  <Link href={`/articles/${article.id}`} className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-neutral-400 mb-4">
                  {article.content.substring(0, 150)}...
                </p>
              </div>
              <div className="flex justify-between items-center text-sm text-neutral-500 mt-4">
                <span>❤️ {article.likes} Likes</span>
                <span>{new Date(article.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;
