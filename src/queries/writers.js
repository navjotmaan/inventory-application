const pool = require('../config/database');

async function insertWriter(name) {
    const result = await pool.query("INSERT INTO writers VALUES ($1) RETURNING id", [name]);
    return result.rows[0].id;
}

module.exports = { insertWriter };