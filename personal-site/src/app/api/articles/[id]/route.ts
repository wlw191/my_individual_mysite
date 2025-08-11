import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

interface Params {
  params: { id: string };
}

// Get a single article by ID
export async function GET(request: Request, { params }: Params) {
  const { id } = params;
  try {
    const { rows } = await db.query('SELECT * FROM articles WHERE id = $1', [id]);
    if (rows.length === 0) {
      return NextResponse.json({ message: 'Article not found' }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error(`Error fetching article ${id}:`, error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Update an article by ID
export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  try {
    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    const { rows } = await db.query(
      'UPDATE articles SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
      [title, content, id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ message: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error(`Error updating article ${id}:`, error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Delete an article by ID
export async function DELETE(request: Request, { params }: Params) {
  const { id } = params;
  try {
    const result = await db.query('DELETE FROM articles WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return NextResponse.json({ message: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error(`Error deleting article ${id}:`, error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
