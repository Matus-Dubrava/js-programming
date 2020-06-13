const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// logger middleware
app.use((req, res, next) => {
	const { url, method } = req;
	console.log(url, method);
	next();
});

// imported routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// catch all middleware, called when no matching path is found
app.use((req, res) => {
	res.statusCode = 404;
	res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
	console.log(`server listening in port ${port}`);
});
