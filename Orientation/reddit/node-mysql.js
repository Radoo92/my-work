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


connection.query(
    `CREATE TABLE IF NOT EXISTS posts (
        id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
        title VARCHAR(256) NOT NULL,
        body TEXT,
        created TIMESTAMP NOT NULL DEFAULT NOW(),
        PRIMARY KEY(id)
        )`,
    (error, result) => {
        if (error) {
            throw error;
        }

        console.log("Succesfully created table 'posts'");
    }
);

const myTitle = "This is my title"

const query = connection.query(
    `INSERT INTO posts (title, body) VALUES (?, '...is not that difficult')`,
    [myTitle],
    (error, result) => {
        if (error) {
            throw error;
        }

        if (result.affectedRows > 0) {
            console.log("Succesfully inserted into table 'posts'");
        }
    }
);

console.log(query.sql);

connection.query(
    `SELECT * FROM posts;`,
    (error, result) => {
        if (error) {
            throw error;
        }

        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }
);