import React from 'react'
import faker from 'faker'

// todo make a single page for users
// todo make faker data


// this must be a children in div ui container comments

const CommentDetail = (props) => {
  const { name, comment } = props
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {name || faker.internet.userName()}
        </a>
      </div>
      <div className="metadata">
        <div className="text">{comment || faker.random.words()}</div>
      </div>
    </div>
  )
}

export default CommentDetail
