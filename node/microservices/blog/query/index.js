const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT;
const EVENT_BUS_URL = process.env.EVENT_BUS_URL;

if (!port) {
	throw new Error('Failed to get PORT from environment variable');
}

let posts = {};

const handleEvent = (type, data) => {
	if (type === 'PostCreated') {
		const { id, title } = data;
		posts[id] = { id, title, comments: [] };
	}

	if (type === 'CommentCreated') {
		const { content, postId, status, id } = data;
		const post = posts[postId];
		post.comments.push({ id, content, status });
	}

	if (type === 'CommentUpdated') {
		const { content, postId, status, id } = data;
		const post = posts[postId];
		const comment = post.comments.find((comment) => comment.id === id);

		comment.status = status;
		comment.content = content;
	}
};

app.use(cors());
app.use(bodyParser.json());

app.post('/events', (req, res) => {
	const { type, data } = req.body;

	handleEvent(type, data);

	res.send({});
});

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.listen(port, async () => {
	console.log(`listening on port ${port}`);

	const response = await axios.get(`${EVENT_BUS_URL}/events`);
	for (let event of response.data) {
		console.log(`processing event ${event.type}`);
		handleEvent(event.type, event.data);
	}
});
