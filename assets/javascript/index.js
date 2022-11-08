const express = require('express');
const server = express();
server.use(express.json());
const users = [{
    name: 'Inglide',
    email: 'teste@teste.com',
    password: '123456'
}];

//get all users
server.get('/users', (req, res) => {
    return res.json(users);
});
//get one users
server.get('/users/:index', (req, res) => {
    return res.json(req.users);
});

server.post('/users' ,(req, res) => {
    const {name} = req.body;
    users.push(name);

    return res.json(users);
});

server.listen(3000);