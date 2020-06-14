const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res) => {
    res.render('add-product', { pageTitle: 'Add Product' });
});

router.post('/add-product', (req, res) => {
    const { title } = req.body;

    products.push({ title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
