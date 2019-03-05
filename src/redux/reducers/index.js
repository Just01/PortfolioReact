import { combineReducers } from 'redux'
import {
  songsReducer, selectedSongsReducer,
  videoReducer, selectedVideoReducer,
  imageReducer, selectedImageReducer,
  postsReducer, usersReducer,
} from './MediaReducers'

import authReducer from './AuthReducer'

export default combineReducers({
  // old one
  songs: songsReducer,
  selectedSong: selectedSongsReducer,

  videos: videoReducer,
  selectedVideo: selectedVideoReducer,

  images: imageReducer,
  selectedImage: selectedImageReducer,

  posts: postsReducer,
  users: usersReducer,

  auth: authReducer,
})
