import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { password } = await request.json();
    const { id } = await params;

    const { rows } = await sql`
      SELECT * FROM proposals WHERE id = ${id} AND password = ${password};
    `;

    if (rows.length === 0) {
      return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
    }

    return NextResponse.json({ success: true, data: rows[0] });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
