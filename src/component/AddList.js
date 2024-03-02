import React, { useRef, useState } from 'react';
import style from './css/Card.module.css';

// 음...oninput잡아서 들어온 값 onchange 해주고
// addItem으로 들어온 값 setarr에 담아서 보내줘

const AddList = () => {
    const[input, setInput] = useState()
    const[arr, setArr] = useState([])

    const inputRef = useRef(null)

    const onInput = (e) => {
        const { value } = e.target
        setInput(value)
    }

    const addItem = () => {
        if(input !== '') {
            setArr([...arr, input])
            setInput('')

            inputRef.current.focus() //input창 포커스
        }
    }

    return (
        <div>
            <div className={ style.addListDiv }>
                <h3>지나의 추가 리스트</h3>
                <input onChange={ onInput } value={ input } ref={ inputRef }></input>
                <button onClick={ addItem }>추가</button>
            </div>

            <div className={  style.addList }>
                {
                    arr.map((item, index) => 
                        <div className={ style.addListSub }>
                            <div>{ item }</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AddList;