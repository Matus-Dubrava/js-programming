import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
	const [title, setTitle] = useState('');

	const onInputChange = (event) => {
		setTitle(event.target.value);
	};

	const onSubmit = async (event) => {
		event.preventDefault();

		try {
			await axios.post('http://localhost:4000/posts', {
				title,
			});
			setTitle('');
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Title</label>
					<input
						className="form-control"
						onChange={onInputChange}
						value={title}
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default PostCreate;
