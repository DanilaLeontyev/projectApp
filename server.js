const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Кладет данные из формы в request object (свойство body)

let users = [
    {
        id: 1,
        first_name: 'Данила',
        last_name: 'Леонтьев',
        email: 'leontyevdv@rusagromaslo.com'
    },
    {
        id: 2,
        first_name: 'Регина',
        last_name: 'Гиззатуллина',
        email: 'reginagiz98@gmail.com'
    },
    {
        id: 3,
        first_name: 'Добычина',
        last_name: 'Ирина',
        email: 'dobychina@rusagromaslo.com'
    },
    {
        id: 4,
        first_name: 'Пупкин',
        last_name: 'Залупец',
        email: 'leontyevdv@rusagromaslo.com'
    },
    {
        id: 5,
        first_name: 'Запупыркин',
        last_name: 'Выпуклец',
        email: 'leontyevdv@rusagromaslo.com'
    }
];

app.get('/', (req, res) => {
    //TODO: Вытащить данные из базы данных

    res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    let user = users.find(user => {
        //TODO: Выводить отдельные html странички для кажого пользователя

        return user.id === Number(req.params.id);
    });
    res.send(user);
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('post data', req.body);
});
app.listen(3000, () => {
    console.log('Server is listenint on port 3000');
});
