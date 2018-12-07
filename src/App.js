import React from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import unsplash from './api/unsplash'
import ImageList from './components/ImageList'

export default class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (search) => {
    const response = await unsplash.get('/search/photos', { params: { query: search } })
    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}
