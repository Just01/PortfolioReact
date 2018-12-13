import React from 'react'
import PostContainer from "./containers/postContainer/PostContainer"

export default class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <PostContainer />
      </div>
    )
  }
}
