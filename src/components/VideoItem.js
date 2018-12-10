import React from 'react'
import './styles/ImageList.css'

const VideoItem = ({ video }) => {
  const { title, thumbnails } = video.snippet
  return (
    <div className="item">
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
