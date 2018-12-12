import youtube from "../api/youtube"

export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song,
  }
}

export const fetchVideo = (query) => async dispatch => {
  const response = await youtube.get('/search', { params: { q: query } })

  dispatch({ type: 'FETCH_VIDEO', payload: response.data.items })
}

export const selectVideo = video => {
  return {
    type: 'VIDEO_SELECTED',
    payload: video,
  }
}

