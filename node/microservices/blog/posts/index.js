const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT;
const EVENT_BUS_URL = process.env.EVENT_BUS_URL;

if (!PORT) {
	throw new Error('Failed to get PORT from environment variable');
}

console.log(`connecting to event bus at: ${EVENT_BUS_URL}`);

const posts = {};

app.use(bodyParser.json());
app.use(cors());

// app.get('/posts', (req, res) => {
// 	res.send(posts);
// });

app.post('/posts/create', async (req, res) => {
	const id = randomBytes(4).toString('hex');
	const { title } = req.body;

	posts[id] = { id, title };

	await axios.post(`${EVENT_BUS_URL}/events`, {
		type: 'PostCreated',
		data: posts[id],
	});

	res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
	const { type, data } = req.body;
	console.log(`received event: ${type}`);
	res.send({});
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
