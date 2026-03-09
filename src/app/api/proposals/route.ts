import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { company, name, email, product, proposal, password } = await request.json();

    // Create table if it doesn't exist (Simple initialization)
    await sql`
      CREATE TABLE IF NOT EXISTS proposals (
        id SERIAL PRIMARY KEY,
        company VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        product VARCHAR(255) NOT NULL,
        proposal TEXT NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const result = await sql`
      INSERT INTO proposals (company, name, email, product, proposal, password)
      VALUES (${company}, ${name}, ${email}, ${product}, ${proposal}, ${password})
      RETURNING id;
    `;

    return NextResponse.json({ success: true, id: result.rows[0].id }, { status: 201 });
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    // metadata only for the list view (no proposal content, no password)
    const { rows } = await sql`
      SELECT id, company, product, created_at
      FROM proposals
      ORDER BY created_at DESC;
    `;
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
