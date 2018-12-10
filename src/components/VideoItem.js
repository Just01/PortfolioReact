import React from 'react'
import './styles/VideoItem.css'

const VideoItem = ({ video, onSelect }) => {
  const { title, thumbnails } = video.snippet
  return (
    <div onClick={() => onSelect(video)} className="video-item item">
      <img
        className="ui image"
        alt={title}
        src={thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  )
}

export default VideoItem
