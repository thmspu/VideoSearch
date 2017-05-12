import React, {Component} from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div>
			<input 
			className="form-control" 
			value={this.state.term}
			onChange={(e) => {this.onInputChange(e.target.value)}}/><br/>

			</div>
			);
		}

		onInputChange(term) {
				this.setState({term});
				this.props.onSearchTermChange(term);
		}
}

export default SearchBar;