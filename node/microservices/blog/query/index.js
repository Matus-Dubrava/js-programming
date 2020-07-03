const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4002;
const NODE_ENV = process.env.NODE_ENV || 'development';

let posts = {};

app.use(cors());
app.use(bodyParser.json());

app.post('/events', (req, res) => {
	const {
		type,
		data,
		data: { id },
	} = req.body;
	console.log(`received event: ${type}`);

	switch (type) {
		case 'PostCreated':
			const { title } = data;
			posts[id] = { id, title, comments: [] };
			break;
		case 'CommentCreated':
			const { content, postId } = data;
			const post = posts[postId];
			post.comments.push({ id, content });
			break;
	}

	console.log(posts);

	res.send({});
});

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
