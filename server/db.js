const Pool = require("pg").Pool;

const pool = new Pool({
  user: "mac166",
  password: "hrhk",
  host: "localhost",
  port: 5432,
  database: "todolist"
});

module.exports = pool;
