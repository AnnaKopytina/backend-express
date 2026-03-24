const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({
        items: [
            { id: 1, name: 'Аня' },
            { id: 2, name: 'Настя' },
            { id: 3, name: 'Тима' }
        ]
    });
})

module.exports = router;
