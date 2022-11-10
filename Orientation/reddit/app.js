const express = require("express");
const sql = require("mysql2");

const connection = sql.createConnection({
    host: 'localhost',
    user: 'gfa',
    database: 'reddit',
}
);

connection.connect(error => {
    if (error) {
        throw error;
    }

    console.log("Succesfully conected to database");
});

const app = express()

app.get('/api/posts', (req, res) => {
    const query = connection.query(
        `SELECT * FROM posts;`,
        (error, result) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).send({
                    message: "success",
                    size: result.length,
                    data: result
                });
            }
        }
    );

    console.log(`>> Executed query was: ${query.sql}`);
});

app.listen(8080);