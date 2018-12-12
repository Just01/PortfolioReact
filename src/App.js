import React from 'react'
import VideoContainer from "./containers/videoContainer/VideoContainer"

export default class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <VideoContainer />
      </div>
    )
  }
}
