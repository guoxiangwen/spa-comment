import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render() {
    console.log(this.props.comments)
    return (
      <div>
        {this.props.comments?this.props.comments.map((comment, i) =>
          <Comment comment={comment} key={i}
            index={i}
            onDeleteComment={this.handleDeleteComment.bind(this)}
          />
        ):null}
      </div>
    )
  }
}

export default CommentList