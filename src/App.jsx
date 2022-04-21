// 使用less编写时，会自动编译成css，所以引入时，必须引入css文件
import "./App.css";

function App() {
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
        </div>
      </div>
    </div>
  );
}

export default App;
