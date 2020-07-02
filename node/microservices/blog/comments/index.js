const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();

const commentsByPostId = {};

app.use(bodyParser.json());
app.use(cors());

app.get('/posts/:id/comments', (req, res) => {
	const { id } = req.params;

	res.send(commentsByPostId[id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
	const { id } = req.params;
	const { content } = req.body;
	const commentId = randomBytes(4).toString('hex');

	const comments = commentsByPostId[id] || [];
	comments.push({ id: commentId, content });
	commentsByPostId[id] = comments;

	await axios.post('http://localhost:4005/events', {
		type: 'CommentCreated',
		data: {
			id: commentId,
			content,
			postId: id,
		},
	});

	res.status(201).send(comments);
});

app.post('/events', (req, res) => {
	const { type, data } = req.body;
	console.log(`received event: ${type}`);
	res.send({});
});

app.listen(4001, () => {
	console.log(`server listening on 4001`);
});
