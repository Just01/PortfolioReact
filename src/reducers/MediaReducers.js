export const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05'},
    { title: 'Macarena', duration: '2:30'},
    { title: 'All star', duration: '3:15'},
    { title: 'I Want it That Way', duration: '1:45'},
  ]
}

export const selectedSongsReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}


export const videoReducer = (videos = null, action) => {
  switch (action.type) {
    case 'FETCH_VIDEO':
      return action.payload
    default:
      return videos
  }
}

export const selectedVideoReducer = (selectedVideo = null, action) => {
  if (action.type === 'VIDEO_SELECTED') {
    return action.payload
  }
  return selectedVideo
}