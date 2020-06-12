import React, { Component } from 'react';

class SearchBar extends Component {
	state = { term: '' };

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div>
						<label htmlFor="search-bar">Image Search</label>
						<input
							id="search-bar"
							onChange={(e) =>
								this.setState({ term: e.target.value })
							}
							value={this.state.term}
							type="text"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
