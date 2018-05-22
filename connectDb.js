const sqlite3 = require('sqlite3').verbose();

let data = {};

let db = new sqlite3.Database('./db/test.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('connect to db, success');
});

db.serialize(() => {
    // TODO: Отправить данные на сервер

    db.each(
        `SELECT user_id, first_name, last_name, email FROM users`,
        (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            data.push({
                id: user_id,
                first_name: first_name,
                last_name: last_name,
                email: email
            });
        }
    );
});

db.close(err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('close the database connection');
});
