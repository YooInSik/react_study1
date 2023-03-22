import './App.css';
import React, { useState } from 'react';

function App() {

  let [title,b] = useState('남자 코트 추천')

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
        </div>
        <div className="list">
          <h4>글 제목</h4>
          <p>ㅇ월 ㅇ일 발행 </p> </div>
          <div className="list">
          <h4>글 제목</h4>
          <p>ㅇ월 ㅇ일 발행 </p> </div>
          <div className="list">
          <h4>글 제목</h4>
          <p>ㅇ월 ㅇ일 발행 </p> </div>
    </div>
  );
} 

export default App;
