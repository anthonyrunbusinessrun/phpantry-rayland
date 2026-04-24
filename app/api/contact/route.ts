import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }
    const client = await pool.connect()
    try {
      await client.query(
        'INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4)',
        [name, email, subject || null, message]
      )
      return NextResponse.json({ success: true }, { status: 201 })
    } finally {
      client.release()
    }
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
