import React from 'react'
import CommentDetail from "../../components/CommentDetail"

const PostsList = ({ posts, onSelect }) => {
  console.log('POSTLIST - ', posts)
  const list = posts && posts.map((post) => {
    return <CommentDetail name={post.name} />
  })

  return <div className="ui relaxed divided list">{list}</div>
}

export default PostsList
