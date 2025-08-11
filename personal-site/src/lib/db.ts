import { Pool } from 'pg';

// This ensures that there is only one pool instance in the application.
// In a serverless environment, this can be important for managing connections efficiently.
let pool: Pool;

const getPool = () => {
  if (!pool) {
    console.log('Creating new PostgreSQL connection pool...');
    pool = new Pool({
      // Connection details are read from environment variables
      // PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT
      connectionString: process.env.POSTGRES_URL,
      // Recommended settings for serverless environments
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
  }
  return pool;
};

// We export a query function that gets a client from the pool,
// runs the query, and then releases the client.
export const query = (text: string, params?: any[]) => {
  const start = Date.now();
  const pool = getPool();
  return pool.query(text, params).then(res => {
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, rows: res.rowCount });
    return res;
  });
};

export const db = {
  query,
};
