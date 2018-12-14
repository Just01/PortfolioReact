import youtube from '../api/youtube'
import jsonPlaceholder from '../api/jsonPlaceholder'

// ********************* SONG *********************

export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song,
  }
}

// ********************* VIDEO *********************

export const fetchVideo = query => async (dispatch) => {
  const response = await youtube.get('/search', { params: { q: query } })

  dispatch({ type: 'FETCH_VIDEO', payload: response.data.items })
}

export const selectVideo = video => {
  return {
    type: 'VIDEO_SELECTED',
    payload: video,
  }
}

// ********************* POST *********************

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POST', payload: response.data })
}

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
}

