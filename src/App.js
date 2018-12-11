import React from 'react'
import SongContainer from "./containers/songContainer/SongContainer"

export default class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SongContainer />
      </div>
    )
  }
}
