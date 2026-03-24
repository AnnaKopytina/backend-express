const express = require('express');
const router = express.Router();

let users = [
    {id: 1, name: 'Аня'},
    {id: 2, name: 'Настя'},
    {id: 3, name: 'Тима'}
];

router.get('/', function (req, res, next) {
    res.json({
        items: users
    });
})

router.post('/', function (req, res, next) {
    const {name} = req.body;

    const newUser = {
        id: users.length + 1,
        name: name
    };

    users.push(newUser);

    res.status(201).json(newUser);
})

module.exports = router;