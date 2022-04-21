// 使用less编写时，会自动编译成css，所以引入时，必须引入css文件
import "./App.css";
import React from "react";
import AddComment from "./pages/AddComment";
import CommentList from "./pages/CommentList";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          {/* 头部标题 */}
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="comment">
          <div className="container">
            <AddComment />
            <CommentList />
          </div>
        </div>
      </div>
    );
  }
}
