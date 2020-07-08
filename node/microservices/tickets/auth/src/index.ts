import express from 'express';
import { json } from 'body-parser';

const app = express();
const port = process.env.PORT || '3000';

app.use(json());

app.use((req, res, next) => {
	const { method, url } = req;
	console.log(`${method} ${url}`);
	return next();
});

app.get('/api/users/currentuser', (req, res) => {
	res.send('Hi There');
});

app.listen(port, () => {
	console.log(`auth service listening on port ${port}!!`);
});
