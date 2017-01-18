import React from 'react';

const VideoListItem = ({video, selectedVideo}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return(
    <li onClick={() => selectedVideo(video)}>
      <div>
        <div>
          <img className='media-object' src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
  </li>
  )
}

export default VideoListItem;
