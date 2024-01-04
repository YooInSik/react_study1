import React from 'react';
import '../Component/SignInModal.css'
import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';

const SignInModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [startDate, setStartDate] = useState(new Date());

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
          <div>
                <label htmlFor='input_username'>UserName : </label>
                <input></input>
            </div>
            <div>
                <label htmlFor='input_birth'>Birth : </label>
                <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div>
            <label htmlFor='input_id'>ID : </label>
                <input></input>
            </div>
            <div>
            <label htmlFor='input_pw'>Password : </label>
                <input></input>
            </div>
            <div>
            <label htmlFor='input_confirrm_pw'>Confirm Password : </label>
                <input></input>
            </div>
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default SignInModal;