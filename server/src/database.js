import mysql2 from "mysql2"

const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'sql_practice'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }

  console.log('Connected to MySQL!');
});

export default db 