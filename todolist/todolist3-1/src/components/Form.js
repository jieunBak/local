import React from 'react';
import './Form.scss';

const Form = (props) => {
    return(
        <div className="form">
            <input value={props.value} onChange={props.onChange} onKeyPress={props.onKeyPress}/>
            <div className="create-button" onClick={props.onCreate}>
                추가
            </div>
        </div>
    )
}

// const Form = ({value, onChange, onKeyPress, onCreate}) => {
//     return(
//         <div className="form">
//             <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
//             <div className="create-button" onClick={onCreate}>
//                 추가
//             </div>
//         </div>
//     )
// }

export default Form;