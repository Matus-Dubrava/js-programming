import { useState } from 'react';
import Router from 'next/router';

import useRequest from '../../hooks/useRequest';

export default () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { doRequest, errors } = useRequest({
		url: '/api/users/signin',
		method: 'post',
		body: {
			email,
			password,
		},
		onSuccess: () => Router.push('/'),
	});

	const onEmailInputChange = (event) => {
		setEmail(event.target.value);
	};

	const onPasswordInputChange = (event) => {
		setPassword(event.target.value);
	};

	const onSubmit = async (event) => {
		event.preventDefault();

		doRequest();
	};

	return (
		<form onSubmit={onSubmit}>
			<h1>Sign In</h1>
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
			<button className="btn btn-primary">Sign In</button>
			{errors}
		</form>
	);
};
