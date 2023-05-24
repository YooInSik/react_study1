/* eslint-disable */

import './App.css';
import React, { useState } from 'react';

function App() {

  let [title,setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학'])
  //javascript에서 array,object type은 reference type data

  const [like ,setLike] = useState(0) 
  const uplike = () => {
    setLike(like+1);
  }
  const sortTitle = () =>{
    let copy = [...title]

    setTitle(copy.sort())
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
        </div>
        <div className="list">
          <button onClick={sortTitle}>Sort Title</button>
          <h4>{title[0]}<span onClick={uplike}>👍</span>{like}</h4>
          <p>ㅇ월 ㅇ일 발행 </p> </div>
          <div className="list">
          <h4>{title[1]}<span>👍</span>0</h4>
          <p>ㅇ월 ㅇ일 발행 </p> </div>
          <div className="list">
          <h4>{title[2]}<span>👍</span>0 </h4>
          <p>ㅇ월 ㅇ일 발행 </p> </div>
          <p>testing</p>
    </div>
  );
} 

export default App;
