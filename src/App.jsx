// 使用less编写时，会自动编译成css，所以引入时，必须引入css文件
import "./App.css";
import React from "react";
import AddComment from "./pages/AddComment";
import CommentList from "./pages/CommentList";

export default class App extends React.Component {
  state = {
    comments: [
      { key: 0, username: "丁元英", content: "你好，芮小丹" },
      { key: 1, username: "芮小丹", content: "你也好" },
    ],
  };

  // 修改comments
  addComments = (comment) => {
    // console.log("comment", comment);
    if (!comment) {
      return;
    }
    const { comments } = this.state;
    this.setState({
      comments: [comment, ...comments],
    });
  };

  deleteComment = (key) => {
    // const { comments } = this.state;
    console.log("xxxxx");
    // filter不会改变原数组
    const arr = this.state.comments.filter((item) => {
      return item.key !== key;
    });
    console.log(arr);
    this.setState({
      comments: arr,
    });
  };

  render() {
    const { comments } = this.state;
    const { addComments, deleteComment } = this;
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
            <AddComment addComments={addComments} />
            <CommentList comments={comments} deleteComment={deleteComment} />
          </div>
        </div>
      </div>
    );
  }
}
