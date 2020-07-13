import buildClient from '../api/buildClient';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
	return (
		<div>
			<Header currentUser={currentUser} />
			<Component {...pageProps} />
		</div>
	);
};

// this is next.js way of executing stuff before the component is rendered
// data that is retured is provided as props to the component being rendered
AppComponent.getInitialProps = async (appContext) => {
	const { data } = await buildClient(appContext.ctx).get(
		'/api/users/currentuser'
	);

	let pageProps = {};
	if (appContext.Component.getInitialProps) {
		pageProps = await appContext.Component.getInitialProps(appContext.ctx);
	}

	console.log(pageProps);

	return {
		pageProps,
		...data,
	};
};

export default AppComponent;
