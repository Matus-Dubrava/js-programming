import { useState } from 'react';
import axios from 'axios';

export default () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	const renderedErrors = errors.map((err) => {
		return <li key={err.message}>{err.message}</li>;
	});

	const onEmailInputChange = (event) => {
		setEmail(event.target.value);
	};

	const onPasswordInputChange = (event) => {
		setPassword(event.target.value);
	};

	const onSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post('/api/users/signup', {
				email,
				password,
			});
			console.log(response.data);
		} catch (err) {
			setErrors(err.response.data.errors);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<h1>Sign Up</h1>
			<div className="form-group">
				<label>Email Address</label>
				<input
					className="form-control"
					value={email}
					onChange={onEmailInputChange}
				/>
			</div>
			<div className="form-group">
				<label>Password</label>
				<input
					className="form-control"
					type="password"
					value={password}
					onChange={onPasswordInputChange}
				/>
			</div>
			<button className="btn btn-primary">Sign Up</button>
			{errors.length > 0 && (
				<div className="alert alert-danger">
					<ul className="my-0">{renderedErrors}</ul>
				</div>
			)}
		</form>
	);
};
