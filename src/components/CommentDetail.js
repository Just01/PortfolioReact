import React from 'react'
import faker from 'faker'

// todo make a single page for users
// todo make faker data


// this must be a children in div ui container comments

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {faker.internet.userName()}
        </a>
      </div>
      <div className="metadata">
        <span className="date">Today at 6:00PM</span>
        <div className="text">{faker.random.words()}</div>
      </div>
    </div>
  )
}

export default CommentDetail
