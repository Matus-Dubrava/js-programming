import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId }) => {
	const [comments, setComments] = useState([]);

	const fetchComments = async (postId) => {
		const response = await axios.get(
			`http://localhost:4001/posts/${postId}/comments`
		);
		setComments(response.data);
	};

	useEffect(() => {
		fetchComments(postId);
	}, [postId]);

	console.log(comments);
	const renderedComments = comments.map((comment) => (
		<li key={comment.id}>{comment.content}</li>
	));

	return <ul>{renderedComments}</ul>;
};
