import React from "react";
export default class CommentList extends React.Component {
  render() {
    return (
      <div className="commentList">
        {/* 评论回复展示块 */}
        <div className="col-md-8">
          <p className="title">评论回复:</p>
          <ul className="content">
            <li>
              <div>丁元英说:</div>
              <p>hello,芮小丹</p>
              <button className="btn">删除</button>
            </li>
            <li>
              <div>丁元英说:</div>
              <p>hello,芮小丹</p>
              <button className="btn">删除</button>
            </li>
            <li>
              <div>丁元英说:</div>
              <p>hello,芮小丹</p>
              <button className="btn">删除</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
