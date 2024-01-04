/* eslint-disable */

import './App.css';
import React, { useState } from 'react';
import LogIn from './LogIn/LogIn'
import SignInModal from './Component/SignInModal'

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
          <LogIn></LogIn>
    <div>
      <h1>여기 밑에 테스트 코드를 작성해보자.aaaaa</h1>
      <div>
        
      </div>
    </div>
    </div>
  );
} 

export default App;
