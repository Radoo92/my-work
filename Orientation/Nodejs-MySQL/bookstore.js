const express = require("express");
const sql = require("mysql2");
const PORT = 8080;
const app = express();

app.use(express.json());

let connection = sql.createConnection({
    host: "localhost",
    user: "gfa",
    database: "bookinfo",
});

connection.connect((error) => {
    if (error) {
        throw error;
    }
    console.log("Succesfully connected to database");
});