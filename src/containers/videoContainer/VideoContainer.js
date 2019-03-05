import React from 'react'
import { connect } from 'react-redux'
import SearchBar from '../../components/SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import { fetchVideo, selectVideo } from '../../redux/actions/MediaActions'

class VideoContainer extends React.Component {
  componentDidMount() {
    this.props.fetchVideo('learn ReactJS')
  }

  componentDidUpdate() {
    const { video, videos, selectVideo } = this.props
    if (video) return
    selectVideo(videos[0])
  }

  componentWillReceiveProps(nextProps) {
    const { videos, selectVideo } = this.props
    if (videos && videos !== nextProps.videos) {
      selectVideo(nextProps.videos[0])
    }
  }

  render() {
    const { videos, video, fetchVideo, selectVideo } = this.props
    return (
      <div className="ui container">
        <SearchBar onSubmit={search => fetchVideo(search)} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={video} />
            </div>
            <div className="five wide column">
              <VideoList onSelect={video => selectVideo(video)} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.selectedVideo,
    videos: state.videos,
  }
}

export default connect(mapStateToProps, { fetchVideo, selectVideo })(VideoContainer)
