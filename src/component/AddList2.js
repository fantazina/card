import React, { useRef, useState } from 'react';
import style from './css/Card.module.css';

const AddList2 = () => {
    const [input, setInput] = useState({
        name : '',
        age : ''
    })
    const [arr, setArr] = useState([])
    const [search, setSearch] = useState('')
    const [searchAge, setSearchAge] = useState()

    const inputRef = useRef(null)

    const onInput = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name] : value
        })
    }

    const addItem = () => {
        if(input.name !== '' && input.age !== '') {
            setArr([...arr, input])
            setInput({
                name : '',
                age : ''
            })
            inputRef.current.focus() //input창 포커스
        }
    }

    const onDelete = (i) => {
        const updateItem = arr.filter((item, index) => index !== i)
        setArr(updateItem)
    }

    const searchInput = (e) => {
        const { value } = e.target
        setSearch(value)
    }

    const onSearch = () => {
        const searchAge = arr.find(item => item.name === search).age
        setSearchAge(searchAge)
    }

    return (
        <div>
            <div className={ style.inputListDiv }>
                <p>Name : </p> 
                <input onChange={ onInput } name='name' value={ input.name } ref={ inputRef } />
                <p>Age :</p> 
                <input onChange={ onInput } name='age' value={ input.age } ref={ inputRef } /> 
                <button onClick={ addItem }>추가</button>
            </div>

            <div className={ style.inputDiv }>
                {
                    arr.map((item, index) => 
                        <div className={ style.inputItem }>
                            <div className={ style.inputItemName }>
                                <p>이름 : { item.name }</p>
                                <p style={{ marginLeft : '30px' }}>나이 : { item.age }</p>
                                <button onClick={ () => onDelete(index) }>삭제</button>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className={ style.searchList }>
                <div className={ style.searchDiv }>
                    <input onChange={ searchInput } value={ search } />
                    <button onClick={ onSearch }>찾기</button>
                </div>    

            <div className={ style.searchAgeDiv }>
                {
                    searchAge && (                     
                        <div className={ style.searchAge }>
                            <p>나이 : { searchAge }</p>
                        </div>
                    )
                }
            </div>
                
            </div>
        </div>
    );
};

export default AddList2;