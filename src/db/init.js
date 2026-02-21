require('dotenv').config();
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const connectionString = process.env.DATABASE_URL;

const client = new Client(
    connectionString
      ? { connectionString, ssl: { rejectUnauthorized: false } }
      : {
          user: process.env.DB_USER,
          host: process.env.DB_HOST,
          database: process.env.DB_DATABASE,
          password: process.env.DB_PASSWORD,
          port: process.env.DB_PORT,
        }
  );

async function runMigration() {
  try {
    await client.connect();
    
    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    const seeds = fs.readFileSync(path.join(__dirname, 'seeds.sql'), 'utf8');

    await client.query(schema);
    console.log("Schema applied");
    
    await client.query(seeds);
    console.log("Seeds applied");

  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

runMigration();