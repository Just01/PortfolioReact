import React from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import unsplash from './api/unsplash'
import youtube from './api/youtube'
import VideoList from './components/VideoList'

export default class App extends React.Component {
  state = { data: [] }

  /* for find images
    onSearchSubmit = async (search) => {
    const response = await unsplash.get('/search/photos', { params: { query: search } })
    this.setState({ data: response.data.results })
  }*/

  onSearchSubmit = async (search) => {
    const response = await youtube.get('/search', { params: { q: search } })
    console.log(response)
    this.setState({ data: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.data}/>
      </div>
    )
  }
}
