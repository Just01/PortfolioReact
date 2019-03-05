import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../../redux/actions/MediaActions'
import PostItem from './PostItem'

class PostContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers()
  }

  renderPostList = (posts) => {
    return posts.map((post) => {
      return (
        <PostItem key={post.id} post={post} />
      )
    })
  }

  render() {
    const { posts } = this.props
    return (
      <div className="ui relaxed divided list">
        {this.renderPostList(posts)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostContainer)
