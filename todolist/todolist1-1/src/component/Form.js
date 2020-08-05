import React from 'react';
import './Form.css';

const Form = ({value, onChange, onKeyPress, onCreate}) => { 
    //4개의 props. (props) => {props.value}, {props.onChange}, {props.onKeyPress}, {props.onCreate} 동일
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} /> 
            {/* value : input 내용, onChange : input 내용이 변경될 때 실행될 함수 , onKeyPress : input에서 key를 입력할때 실행될 함수 */}
            <div className="create-button" onClick={onCreate}>추가</div>
            {/* onCreate : button이 click 될 때 실행될 함수 */}
        </div>
    );
};

export default Form;
