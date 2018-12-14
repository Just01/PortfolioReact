// ********************* SONG *********************

export const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05' },
    { title: 'Very cool song!', duration: '2:30' },
    { title: 'All star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' },
  ]
}

export const selectedSongsReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

// ********************* VIDEO *********************

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

// ********************* IMAGE *********************

export const imageReducer = (images = null, action) => {
  switch (action.type) {
    case 'FETCH_IMAGE':
      return action.payload
    default:
      return images
  }
}

export const selectedImageReducer = (selectedImage = null, action) => {
  if (action.type === 'IMAGE_SELECTED') {
    return action.payload
  }
  return selectedImage
}

// ********************* POST *********************

export const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_POST':
      return action.payload
    default:
      return posts
  }
}

export const usersReducer = (users = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...users, action.payload]
    default:
      return users
  }
}
