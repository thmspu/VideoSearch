import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import reducers from './reducers';

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { videos: [],
		selectedVideo: null };

		this.videoSearch('nba');
	}

	videoSearch(term) {
			YTSearch({key: API_KEY, term: term}, (videos) => {
				this.setState({ 
					videos: videos,
					selectedVideo: videos[0]
				});
			});  
		}

	render() {
        const videoSearch = _.debounce((term) =>  { this.videoSearch(term) }, 300);

		return (
			<div>
			<SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList 
			onVideoSelect={selectedVideo => this.setState({selectedVideo})}
			videos={this.state.videos}/>
			</div>
		);
	}
	};

	ReactDOM.render(
	<App />
	, document.querySelector('.container')
	);
