const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT;
if (!PORT) {
	throw new Error('Failed to get PORT from environment variable');
}
const POSTS_URL = process.env.POSTS_URL;
const COMMENTS_URL = process.env.COMMENTS_URL;
const QUERY_URL = process.env.QUERY_URL;
const MODERATION_URL = process.env.MODERATION_URL;

const events = [];

app.use(bodyParser.json());

app.post('/events', (req, res) => {
	const event = req.body;
	events.push(event);

	axios.post(`${POSTS_URL}/events`, event);
	axios.post(`${COMMENTS_URL}/events`, event);
	axios.post(`${QUERY_URL}/events`, event);
	axios.post(`${MODERATION_URL}/events`, event);

	res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
	res.send(events);
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
