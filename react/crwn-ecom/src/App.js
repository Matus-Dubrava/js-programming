import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => {
	return (
		<div>
			<h1>HATS PAGE</h1>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
};

export default App;
