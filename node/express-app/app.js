const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// logger middleware
app.use((req, res, next) => {
    const { url, method } = req;
    console.log(url, method);
    next();
});

// imported routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// catch all middleware, called when no matching path is found
app.use((req, res) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(port, () => {
    console.log(`server listening in port ${port}`);
});
