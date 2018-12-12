import React from 'react'
import Spinner from "../../components/Spinner"

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui embed">
        <Spinner message="Please choose the video!"/>
      </div>
    )
  }

  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`

  const { title, description } = video.snippet
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
