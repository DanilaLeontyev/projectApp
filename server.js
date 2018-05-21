const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    //TODO: Вытащить данные из базы данных

    res.json();
});
app.listen(3000, () => {
    console.log('Server is listenint on port 3000');
});
