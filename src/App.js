import React from 'react'
import PostContainer from './containers/postContainer/PostContainer'
import { BrowserRouter, Route } from 'react-router-dom'

const PageOne = () => {
  return (
    <div>
      Page One! Do not use anchor tags!!!
      <a href="/pagetwo">Navigate to Page Two!</a>
    </div>
  )
}
const PageTwo = () => {
  return (
    <div>
      Page Two
      <button>Click me!</button>
      <a href="/">Navigate to Page One!</a>
    </div>
  )
}
export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={PageOne}/>
            <Route path="/pagetwo" exact component={PageTwo}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
