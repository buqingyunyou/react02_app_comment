import React from "react";
export default class Comment extends React.Component {
  render() {
    return (
      <li>
        <div>丁元英说:</div>
        <p>hello,芮小丹</p>
        <button className="btn">删除</button>
      </li>
    );
  }
}
