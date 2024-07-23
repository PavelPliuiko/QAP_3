const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    database: 'stock_management',
    port: 5432,
});

module.exports = pool;
