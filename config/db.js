const mysql = require('mysql2/promise');

async function connectDB() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT || 4000,
        ssl: {
            rejectUnauthorized: true
        }
    });
    console.log('Connected to MySQL database');
    return connection;
}

module.exports = connectDB;