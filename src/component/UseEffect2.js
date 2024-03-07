import React, { useEffect, useState } from 'react';
import style from './css/Card.module.css';

const UseEffect2 = () => {
    const[data, setData] = useState([])
    const[input, setInput] = useState('')
    const[count, setCount] = useState(0)

    useEffect(() => {
        setCount(data.length)
    }, [data])

    const onAdd = () => { 
        if(input !== '') {
            setData([
                ...data, input
            ])
            setInput('')
        }
    }

    const onDelete = (i) => {
        setData(data.filter((item, index )=> index !== i))
    }

    return (
        <div>
            <div className={ style.countDiv }>
                <p>카운트(count) : {count}</p>
                <input onChange={ (e) => setInput(e.target.value) } value={ input } />
                <button onClick={ onAdd }>등록</button>
            </div>

            <div className={ style.dataDiv }>
                {
                    data.map((item, index) => 
                        <div className={ style.itemDiv }>{item}
                            <button onClick={ () => onDelete(index) }>삭제</button>
                        </div>
                        
                    )
                }
            </div>
        </div>
    );
};

export default UseEffect2;