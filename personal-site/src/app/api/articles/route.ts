import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Retrieve a list of articles
 *     description: Retrieve a list of all articles from the database, ordered by creation date.
 *     responses:
 *       200:
 *         description: A list of articles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   likes:
 *                     type: integer
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *   post:
 *     summary: Create a new article
 *     description: Creates a new article with a title and content.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created article.
 *       400:
 *         description: Missing title or content.
 */

// Get all articles
export async function GET() {
  try {
    const { rows } = await db.query('SELECT * FROM articles ORDER BY created_at DESC');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Create a new article
export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    const { rows } = await db.query(
      'INSERT INTO articles (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );

    return NextResponse.json(rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
