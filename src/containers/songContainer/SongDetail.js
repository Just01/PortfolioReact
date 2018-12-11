import React from 'react'
import { connect } from 'react-redux'

const SongDetail = props => {
  if (!props.song) {
    return <div>Select a song!</div>
  }

  return (
    <div>
      <div>
        {props.song.title}
      </div>
      {props.song.duration}
    </div>
  )
}
const mapStateToProps = (state) => {
  return { song: state.selectedSong, }
}

export default connect(mapStateToProps)(SongDetail)
