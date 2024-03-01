import React, { useState } from 'react';
import style from './css/Card.module.css';

// 음...oninput잡아서 들어온 값 onchange 해주고
// onsubmit으로 들어온 값 setarr에 담아서 보내줘
// 
const AddList = () => {
    const[input, setInput] = useState()
    const[arr, setArr] = useState([])

    const onInput = (e) => {
        const { value } = e.target
        setInput(value)
    }

    const onSubmit = () => {
        setArr()
    }

    return (
        <div>
            <div className={ style.addListDiv }>
                <h3>지나의 추가 리스트</h3>
                <input onChange={ onInput } value={ input }></input>
                <button onClick={ onSubmit }>추가</button>
            </div>
        
            <div className={ style.addListSub }>
                
            </div>
        </div>
    );
};

export default AddList;