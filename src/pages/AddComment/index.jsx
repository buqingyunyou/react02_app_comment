import React from "react";
import PropTypes from "prop-types";

export default class AddComment extends React.Component {
  state = {
    username: "",
    content: "",
  };
  static propTypes = {
    addComments: PropTypes.func.isRequired,
  };

  // 事件回调函数带参
  change = (flag) => {
    return (e) => {
      this.setState({
        [flag]: e.target.value.trim(),
      });
    };
  };
  // 点击按钮
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, content } = this.state;
    const { addComments } = this.props;
    if (!username) {
      alert("请输入用户名");
      return;
    }
    if (!content) {
      alert("请输入评论内容");
      return;
    }

    addComments({ username, content, key: new Date().getTime() });

    //清空输入框
    this.setState({
      username: "",
      content: "",
    });
  };

  render() {
    const { username, content } = this.state;
    const { change, handleSubmit } = this;
    return (
      <form className="addComment" onSubmit={handleSubmit}>
        {/* 评论输入块 */}
        <div className="col-md-4">
          <p>用户名</p>
          <input
            onChange={change("username")}
            type="text"
            placeholder="请输入用户名"
            value={username}
          />
          <p>评论内容</p>
          <textarea
            onChange={change("content")}
            placeholder="请输入评论内容"
            rows="3"
            value={content}
          />
          <button className="btn">提交</button>
        </div>
      </form>
    );
  }
}
