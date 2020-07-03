import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
	const [posts, setPosts] = useState({});

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		try {
			const response = await axios.get('http://localhost:4002/posts');
			setPosts(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	const renderedPosts = Object.values(posts).map(
		({ id, title, comments }) => (
			<div
				className="card"
				style={{ width: '30%', marginBottom: '20px' }}
				key={id}
			>
				<div className="card-body">
					<h3>{title}</h3>
					<CommentList comments={comments} />
					<CommentCreate postId={id} />
				</div>
			</div>
		)
	);

	return (
		<div className="flex-wrap flex-row justify-content-between d-flex">
			{renderedPosts}
		</div>
	);
};
