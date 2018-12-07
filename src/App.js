import React from 'react'
import SearchBar from './components/SearchBar'

export default class App extends React.Component {
  onSearchSubmit = (search) => {
    console.log(search)
  }

  render() {
    return <SearchBar onSubmit={this.onSearchSubmit} />
  }
}
