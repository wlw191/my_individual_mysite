import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

interface Params {
  params: { id: string };
}

/**
 * @swagger
 * /api/articles/{id}/like:
 *   put:
 *     summary: Like an article
 *     description: Increments the like count of a specific article by one.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the article to like.
 *     responses:
 *       200:
 *         description: The updated article with the new like count.
 *       404:
 *         description: Article not found.
 */

// Increment the like count for an article
export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  try {
    // We could also lock the row to prevent race conditions in high-traffic scenarios
    // but for a personal blog, this is sufficient.
    const { rows } = await db.query(
      'UPDATE articles SET likes = likes + 1, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *',
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ message: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error(`Error liking article ${id}:`, error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
