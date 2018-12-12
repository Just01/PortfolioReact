import { combineReducers } from 'redux'
import {
  songsReducer, selectedSongsReducer,
  videoReducer, selectedVideoReducer
} from "./MediaReducers"

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongsReducer,

  videos: videoReducer,
  selectedVideo: selectedVideoReducer,
})