import React, { useState } from 'react';
import backendServer from '../apis/backendServer';

export default ({ postId }) => {
	const [content, setContent] = useState('');

	const onInputChange = (event) => {
		setContent(event.target.value);
	};

	const onSubmit = async (event) => {
		event.preventDefault();

		await backendServer.post(`/posts/${postId}/comments`, {
			content,
		});
		setContent('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>New Comment</label>
					<input
						className="form-controls"
						onChange={onInputChange}
						value={content}
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};
