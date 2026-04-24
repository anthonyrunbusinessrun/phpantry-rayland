import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, location, type, message } = await req.json()
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const client = await pool.connect()
    try {
      await client.query(
        'INSERT INTO volunteers (name, email, phone, location, message) VALUES ($1, $2, $3, $4, $5)',
        [name, email, phone || null, location ? `${location} — ${type}` : type, message || null]
      )
      return NextResponse.json({ success: true }, { status: 201 })
    } finally {
      client.release()
    }
  } catch (err) {
    console.error('Volunteer API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
