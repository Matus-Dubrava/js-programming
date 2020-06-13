import './SearchBar.css';

import React, { Component } from 'react';

class SearchBar extends Component {
	state = { term: '' };

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="searchbar">Video Search</label>
						<input
							id="searchbar"
							type="text"
							onChange={(e) =>
								this.setState({ term: e.target.value })
							}
							value={this.state.term}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
