import React from 'react'
import unsplash from '../../api/unsplash'
import SearchBar from '../../components/SearchBar'
import ImageList from "./ImageList"

export default class ImageContainer extends React.Component {
  state = { data: [] }

  onSearchSubmit = async (search) => {
    const response = await unsplash.get('/search/photos', { params: { query: search } })
    this.setState({ data: response.data.results })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.data}/>
      </div>
    )
  }
}
