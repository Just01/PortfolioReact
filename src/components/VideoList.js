import React from 'react'
import './styles/ImageList.css'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  const list = videos.map((video) => {
    return <VideoItem key={video.etag} video={video} />
  })

  return <div className="ui relaxed divided list">{list}</div>
}

export default VideoList
