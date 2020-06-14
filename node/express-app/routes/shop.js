const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res) => {
    const { products } = adminData;
    // res.sendFile(path.join(rootDir, 'views', 'shop'));
    res.render('shop', { products, pageTitle: 'Shop' });
});

module.exports = router;
