// import React from 'react';
// import {Paper,Typography} from '@material-ui/core';

// const VideoDetail = () => {
//     if(!video) return <div>Loading....</div>
//     console.log(video.id.videoId);

//     const videoSrc = 'https://www.youtube.com/enbed/${video.id.videoId}'
//     return (
//         // <h1>This is a Video Detail component</h1>
//         <React.Fragment>
//             <Paper elevation={6} style={{hieght:'70%'}}>
//             <iframe  frameBorder="0" height="100%" width="100%" title="video Player" src="..."/>
//             </Paper>

//             <Paper elevation={6} style={{height:'15px'}}></Paper>
//         </React.Fragment>
//     )
// }
// export default VideoDetail;

import React from "react";

import { Paper, Typography } from "@material-ui/core";

export default ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
}