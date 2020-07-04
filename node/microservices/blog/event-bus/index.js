const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT;
if (!PORT) {
	throw new Error('Failed to get PORT from environment variable');
}
const POSTS_URL = process.env.POSTS_URL;

const events = [];

app.use(bodyParser.json());

app.post('/events', (req, res) => {
	const event = req.body;
	events.push(event);

	axios.post(`${POSTS_URL}/events`, event);
	// axios.post('http://localhost:4001/events', event);
	// axios.post('http://localhost:4002/events', event);
	// axios.post('http://localhost:4003/events', event);

	res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
	res.send(events);
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
