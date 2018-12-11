import React from 'react'
import Spinner from "../../components/Spinner"

const SongDetail = ({ video }) => {
  if (!video) {
    return <Spinner/>
  }


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

export default SongDetail
