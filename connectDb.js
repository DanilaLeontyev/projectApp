const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/test.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('connect to db, success');
});

db.serialize(() => {
    // TODO: Написать запрос к текущим данным

    db.each(`SELECT userId as id, Name as name from users`, (err, row) => {
        if (err) {
            return console.error(err.message);
        }

        console.log(row.id + '\t' + row.name);
    });
});

db.close(err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('close the database connection');
});
