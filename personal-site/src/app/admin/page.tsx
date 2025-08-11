'use client';

import React, { useState, useEffect, FormEvent } from 'react';

// Define the type for an article, matching the database schema
interface Article {
  id: number;
  title: string;
  content: string;
  likes: number;
  created_at: string;
}

const AdminPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';

  // Function to fetch all articles from the API
  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${apiUrl}/api/articles`);
      if (!res.ok) throw new Error('Failed to fetch articles');
      const data = await res.json();
      setArticles(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch articles when the component mounts
  useEffect(() => {
    fetchArticles();
  }, [apiUrl]);

  // Handle form submission for both creating and updating articles
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const url = currentId ? `${apiUrl}/api/articles/${currentId}` : `${apiUrl}/api/articles`;
    const method = currentId ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to save the article');
      }
      resetForm();
      await fetchArticles(); // Refetch articles to show the latest data
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-fill the form for editing
  const handleEdit = (article: Article) => {
    setCurrentId(article.id);
    setTitle(article.title);
    setContent(article.content);
    window.scrollTo(0, 0); // Scroll to top to see the form
  };

  // Handle article deletion
  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to permanently delete this article?')) {
      setError(null);
      try {
        const res = await fetch(`${apiUrl}/api/articles/${id}`, { method: 'DELETE' });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Failed to delete the article');
        }
        await fetchArticles(); // Refetch articles
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  // Reset form fields and state
  const resetForm = () => {
    setCurrentId(null);
    setTitle('');
    setContent('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Admin Panel</h1>

      {/* Form Section */}
      <div className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/50">
        <h2 className="text-2xl font-semibold mb-4">{currentId ? 'Edit Article' : 'Create New Article'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium mb-1">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" disabled={isSubmitting} className="px-6 py-2 font-semibold text-white bg-primary rounded hover:bg-red-800 disabled:bg-neutral-600">
              {isSubmitting ? 'Saving...' : (currentId ? 'Update Article' : 'Create Article')}
            </button>
            {currentId && (
              <button type="button" onClick={resetForm} className="px-6 py-2 font-semibold rounded border border-neutral-600 hover:bg-neutral-700">
                Cancel Edit
              </button>
            )}
          </div>
        </form>
        {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      </div>

      {/* Articles List Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Manage Articles</h2>
        {isLoading ? (
          <p>Loading articles...</p>
        ) : (
          <div className="space-y-4">
            {articles.map(article => (
              <div key={article.id} className="flex justify-between items-center p-4 border border-neutral-700 rounded-lg bg-neutral-800/50">
                <span className="font-semibold">{article.title}</span>
                <div className="flex gap-4">
                  <button onClick={() => handleEdit(article)} className="text-yellow-500 hover:text-yellow-400 font-semibold">Edit</button>
                  <button onClick={() => handleDelete(article.id)} className="text-red-500 hover:text-red-400 font-semibold">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
