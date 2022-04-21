import React from "react";

export default class AddComment extends React.Component {
  render() {
    return (
      <div className="addComment">
        {/* 评论输入块 */}
        <div className="col-md-4">
          <p>用户名</p>
          <input type="text" placeholder="请输入用户名" />
          <p>评论内容</p>
          <textarea
            className="inputComment"
            placeholder="请输入评论内容"
            rows="3"
          />
          <button className="btn">提交</button>
        </div>
      </div>
    );
  }
}
