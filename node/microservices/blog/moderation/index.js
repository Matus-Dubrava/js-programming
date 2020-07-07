const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT;
const EVENT_BUS_URL = process.env.EVENT_BUS_URL;

if (!port) {
	throw new Error('Failed to get PORT from environment variable');
}

app.use(bodyParser.json());

app.post('/events', async (req, res) => {
	const { type, data } = req.body;

	switch (type) {
		case 'CommentCreated':
			const status = data.content.includes('orange')
				? 'rejected'
				: 'approved';

			await axios.post(`${EVENT_BUS_URL}/events`, {
				type: 'CommentModerated',
				data: {
					id: data.id,
					postId: data.postId,
					status,
					content: data.content,
				},
			});
			break;
	}

	res.send({});
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
