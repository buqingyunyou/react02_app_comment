import React from "react";
import PropTypes from "prop-types";
export default class Comment extends React.Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
  };

  handleDelete = () => {
    const { comment, deleteComment } = this.props;
    const { username, key } = comment;
    // 删除确认提示
    if (!window.confirm(`你确认要删除${username}的评论吗?`)) {
      return;
    }
    deleteComment(key);
  };

  render() {
    const { username, content } = this.props.comment;
    return (
      <li>
        <div>{username}:</div>
        <p>{content}</p>
        <button onClick={this.handleDelete} className="btn">
          删除
        </button>
      </li>
    );
  }
}
