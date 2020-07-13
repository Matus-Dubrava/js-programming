import buildClient from '../api/buildClient';

const LandingPage = ({ currentUser }) => {
	return currentUser ? (
		<h1>You are signed</h1>
	) : (
		<h1>You are not signed in</h1>
	);
};

// this is next.js way of executing stuff before the component is rendered
// data that is retured is provided as props to the component being rendered
LandingPage.getInitialProps = async (context) => {
	const { data } = await buildClient(context).get('/api/users/currentuser');
	return data;
};

export default LandingPage;
