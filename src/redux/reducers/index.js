import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {
  songsReducer, selectedSongsReducer,
  videoReducer, selectedVideoReducer,
  imageReducer, selectedImageReducer,
  postsReducer, usersReducer,
} from './MediaReducers'

import authReducer from './AuthReducer'
import navigationReducer from './NavigationReducer'

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
  form: formReducer,
  navigation: navigationReducer
})
