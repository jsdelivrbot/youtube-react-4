import React from 'react';
import SearchBar from '../components/SearchBar.jsx';
import YTSearch from 'youtube-api-search';
import VideoList from '../components/VideoList.jsx';
import VideoDetail from '../components/VideoDetail.jsx';

const API_key = 'AIzaSyBjni536RTdv0B9yySg3_kYA096tbsi6uI';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    }

    YTSearch({key: API_key, term:'ice cream'}, (videos) => {
      console.log(videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return(
      <div>
        Not the real Youtube.
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}
