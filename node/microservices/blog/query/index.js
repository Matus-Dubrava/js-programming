const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4002;

// const posts = {id: { title, comments: [{ id, content}]}}
let posts = {};

app.use(cors());
app.use(bodyParser.json());

app.post('/events', (req, res) => {
	const { type, data } = req.body;
	console.log(`received event: ${type}`);
	console.log(data);

	switch (type) {
		case 'PostCreated':
			posts = parsePost(data, posts);
			break;
		case 'CommentCreated':
			posts = parseComment(data, posts);
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

const parsePost = (data, posts) => {
	const { id, title } = data;
	posts[id] = { title, comments: [] };
	return posts;
};

const parseComment = (data, posts) => {
	const { id, content, postId } = data;
	posts[postId].comments.push({ id, content });
	return posts;
};
