import React from 'react'
import SearchBar from '../../components/SearchBar'
import youtube from '../../api/youtube'
import SongList from './SongList'
import SongDetail from './SongDetail'

export default class SongContainer extends React.Component {
  state = { data: [], selectedVideo: null }

  componentDidMount() {
    this.onSearchSubmit('cat')
  }

  onSearchSubmit = async (search) => {
    const response = await youtube.get('/search', { params: { q: search } })
    console.log(response)
    this.setState({
      data: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <SongDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <SongList onSelect={this.onVideoSelect} videos={this.state.data}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
