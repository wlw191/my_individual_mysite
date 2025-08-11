import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LikeButton from './LikeButton'; // We will create this client component next

interface Article {
  id: number;
  title: string;
  content: string;
  likes: number;
  created_at: string;
}

interface Params {
  params: { id: string };
}

async function getArticle(id: string): Promise<Article | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${apiUrl}/api/articles/${id}`, {
      cache: 'no-store', // Fetch fresh data for each request
    });
    if (res.status === 404) {
      return null;
    }
    if (!res.ok) {
      throw new Error(`Failed to fetch article. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error('Error in getArticle:', error);
    return null;
  }
}

// Generate dynamic metadata for the page title
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = await getArticle(params.id);
  return {
    title: article ? article.title : 'Article Not Found',
    description: article ? article.content.substring(0, 160) : 'The requested article could not be found.',
  };
}

const ArticleDetailPage = async ({ params }: Params) => {
  const article = await getArticle(params.id);

  if (!article) {
    // Use Next.js's built-in notFound function to render the 404 page
    notFound();
  }

  // A more robust implementation would sanitize this HTML or use a Markdown renderer
  const renderContent = () => {
    return { __html: article.content.replace(/\n/g, '<br />') };
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl dark:prose-invert max-w-none">
        <h1 className="text-primary">{article.title}</h1>
        <div className="text-sm text-neutral-500 mb-8 border-b border-neutral-700 pb-4">
          Published on {new Date(article.created_at).toLocaleDateString()}
        </div>

        <div dangerouslySetInnerHTML={renderContent()} />

      </article>

      <div className="mt-8 pt-4 border-t border-neutral-700 flex items-center">
        <LikeButton articleId={article.id} initialLikes={article.likes} />
      </div>
    </div>
  );
};

export default ArticleDetailPage;
