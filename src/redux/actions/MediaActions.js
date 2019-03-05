import _ from 'lodash'
import youtube from '../../api/youtube'
import jsonPlaceholder from '../../api/jsonPlaceholder'


export const VIDEO_SELECTED = 'VIDEO_SELECTED'
export const SONG_SELECTED = 'SONG_SELECTED'
export const FETCH_VIDEO = 'FETCH_VIDEO'
export const FETCH_USER = 'FETCH_USER'
export const FETCH_POST = 'FETCH_POST'

// region ********************* SONG *********************

export const selectSong = song => {
  return {
    type: SONG_SELECTED,
    payload: song,
  }
}

// endregion

// region ********************* VIDEO *********************

export const fetchVideo = query => async (dispatch) => {
  const response = await youtube.get('/search', { params: { q: query } })

  dispatch({ type: FETCH_VIDEO, payload: response.data.items })
}

export const selectVideo = video => {
  return {
    type: VIDEO_SELECTED,
    payload: video,
  }
}

// endregion

// region ********************* POST *********************

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost())

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: FETCH_POST, payload: response.data })
}

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: FETCH_USER, payload: response.data })
}

/*
export const fetchUser = id => async dispatch => _fetchUser(id, dispatch)

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
})
*/

// endregion
