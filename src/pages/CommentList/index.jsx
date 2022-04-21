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
    // 判断显隐
    const display = comments.length ? "none" : "block";

    return (
      <div className="commentList">
        {/* 评论回复展示块 */}
        <div className="col-md-8">
          <p className="title">评论回复:</p>

          {/* 有评论时： */}
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

          {/* 无评论时： */}
          <div style={{ display }} className="empty">
            暂无评论，欢迎添加评论！
          </div>
        </div>
      </div>
    );
  }
}
