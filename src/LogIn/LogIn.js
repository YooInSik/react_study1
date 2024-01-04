import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignInModal from '../Component/SignInModal';

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }

    // 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        // axios.get('/user_inform/login')
        // .then(res => console.log(res))
        // .catch()
    },
        // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
        [])

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>LogIn</button>
            </div>
            <div>
                <button onClick={openModal}>SignIn</button>
                <SignInModal open={modalOpen} close={closeModal} header="Sign In">
                </SignInModal>
            </div>
        </div>
    )
}

export default Login;