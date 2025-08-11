'use client';

import React, { useState, useTransition } from 'react';

interface LikeButtonProps {
  articleId: number;
  initialLikes: number;
}

const LikeButton = ({ articleId, initialLikes }: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleLike = async () => {
    setError(null);

    startTransition(async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
        const res = await fetch(`${apiUrl}/api/articles/${articleId}/like`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Failed to like the article.');
        }

        const updatedArticle = await res.json();
        setLikes(updatedArticle.likes);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'An unknown error occurred.');
      }
    });
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleLike}
        disabled={isPending}
        className="px-6 py-2 font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-colors disabled:bg-neutral-600 disabled:cursor-not-allowed"
      >
        {isPending ? 'Liking...' : '❤️ Like'}
      </button>
      <span className="text-lg font-medium text-neutral-300">{likes} Likes</span>
      {error && <p className="text-sm text-red-500 ml-4">{error}</p>}
    </div>
  );
};

export default LikeButton;
