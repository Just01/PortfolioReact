import React from 'react'
import PostUserInfo from "./PostUserInfo"

const PostItem = ({ post }) => {
  const { title, body } = post
  return (
    <div className="item">
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <PostUserInfo userId={post.userId} />
      </div>
    </div>
  )
}

export default PostItem
