import React from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'

export default class App extends React.Component {
  onSearchSubmit = (search) => {
    axios.get('https://api.unsplash.com/search/photos?', {
      headers: {
        Authorization: 'Client-ID ',
      },
    }).then()
  }

  render() {
    return <SearchBar onSubmit={this.onSearchSubmit} />
  }
}
