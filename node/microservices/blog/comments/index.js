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
	const { id: postId } = req.params;
	const { content } = req.body;
	const commentId = randomBytes(4).toString('hex');
	const status = 'pending';

	const comments = commentsByPostId[postId] || [];
	comments.push({ id: commentId, content, status });
	commentsByPostId[postId] = comments;

	await axios.post('http://localhost:4005/events', {
		type: 'CommentCreated',
		data: {
			id: commentId,
			content,
			postId,
			status,
		},
	});

	res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
	const { type, data } = req.body;

	switch (type) {
		case 'CommentModerated':
			const { id, postId, status, content } = data;
			const comments = commentsByPostId[postId];
			const comment = comments.find((comment) => comment.id === id);
			comment.status = status;

			await axios.post('http://localhost:4005/events', {
				type: 'CommentUpdated',
				data: {
					id,
					postId,
					status,
					content,
				},
			});

			break;
	}

	res.send({});
});

app.listen(4001, () => {
	console.log(`server listening on 4001`);
});
