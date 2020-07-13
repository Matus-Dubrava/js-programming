import { useEffect } from 'react';
import useRequest from '../../hooks/useRequest';
import Router from 'next/router';

export default () => {
	const { doRequest } = useRequest({
		method: 'get',
		url: '/api/users/signout',
		onSuccess: () => Router.push('/'),
	});

	useEffect(() => {
		doRequest();
	}, []);

	return <div>Signing out...</div>;
};
