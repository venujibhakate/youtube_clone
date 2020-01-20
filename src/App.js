import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import youtube from './api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = {
    videos: [],
    selectededVideo: null,
    searchTerm: ''
  }

  componentDidMount() {
    // this.handleSubmit('pdf generation with react and node')
  }
  onVideoSelect = (video) => {
    this.setState({ selectededVideo: video });
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: "AIzaSyACosS6l2qkqkKzn3y-zfVTm1ZHlX_58VY",
        q: searchTerm
      }
    })
    // console.log(response.data.items);
    this.setState({ videos: response.data.items, selectededVideo: response.data.items[0] });
  }
  render() {
    const { selectededVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectededVideo} />
            </Grid>
            <Grid item xs={4}>

              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default App;

