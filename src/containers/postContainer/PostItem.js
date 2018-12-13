import React from 'react'
import PostUserInfo from "./PostUserInfo"

const PostItem = (props) => {
  const { title, body } = props.post
  return (
    <div className="item">
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <PostUserInfo />
      </div>
    </div>
  )
}

export default PostItem
