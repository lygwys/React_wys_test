import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //<React.StrictMode>语法检查
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//reportWebVitals()记录页面性能用到web-vitals库
reportWebVitals();
//其它文件：
//setupTests.js组件单元测试用到jest-dom
//App.test.js给App做测试
//执行顺序：
//index.js引入各种库->去public/index.html找root->渲染App.js