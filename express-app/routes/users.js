const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    const members = ['Аня', 'Настя', 'Тима'];
    res.send(req.json({
        items: [{id: 1, name: 'Anya'}, {id: 2, name: 'Nastya'}, {id: 3, name: 'Tima'}]
    }));


})

module.exports = router;
