import axios from 'axios';

export default ({ req }) => {
	if (typeof window === 'undefined') {
		// on the server
		return axios.create({
			baseURL: 'http://tickets.dev/',
			headers: req.headers,
		});
	} else {
		// on the browser
		return axios.create({ baseURL: '/' });
	}
};
