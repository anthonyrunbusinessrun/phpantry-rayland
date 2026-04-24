const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})
async function migrate() {
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS volunteers (
        id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL,
        phone TEXT, location TEXT, message TEXT, created_at TIMESTAMP DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL,
        subject TEXT, message TEXT NOT NULL, created_at TIMESTAMP DEFAULT NOW()
      );
    `)
    console.log('Migration complete')
  } finally { client.release(); await pool.end() }
}
migrate().catch(console.error)
