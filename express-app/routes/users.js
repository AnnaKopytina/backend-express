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

router.get('/:id', function (req, res, next) {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
    }

    res.json(user);
});

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