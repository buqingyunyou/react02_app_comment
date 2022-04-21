import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

export default class CommentList extends React.Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
  };

  render() {
    const { comments, deleteComment } = this.props;
    return (
      <div className="commentList">
        {/* 评论回复展示块 */}
        <div className="col-md-8">
          <p className="title">评论回复:</p>
          <ul className="content">
            {comments.map((item) => {
              return (
                <Comment
                  deleteComment={deleteComment}
                  comment={item}
                  key={item.key}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
