import React, { useState } from 'react';
import style from './css/Card.module.css';

const AddList3 = () => {
    const[input, setInput] = useState({
        name : '',
        age : ''
    })
    const[arrList, setArrList] = useState([])
    const[search, setSearch] = useState('')
    const[searchAge, setSearchAge] = useState()

    const onInput = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name] : value
        })
    }

    const addItem = () => {
        if(input.name !== '' && input.age !== '') {
            setArrList([...arrList, input])
            setInput({
                name : '',
                age : ''
            })
        }
    }

    const onDelete = (i) => {
        const updateItem = arrList.filter((item, index) => index !== i)
        setArrList(updateItem)
    }

    const searchIn = (e) => {
        const { value } = e.target
        setSearch(value)
    }

    const onSearch = () => {
        const searchAge = arrList.find(item => item.name === search).age
        setSearchAge(searchAge)

    }

    return (
        <div>
            <div className={ style.inputListDiv }>
                <p>Name : </p> 
                <input onChange={ onInput } name='name' value={ input.name }/>
                <p>Age : </p> 
                <input onChange={ onInput } name='age' value={ input.age }/> 
                <button onClick={ addItem }>추가</button>
            </div> 

            <div className={ style.inputDiv }>
                {
                    arrList.map((item, index) => 
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
                    <input onChange={ searchIn } value={ search }/>
                    <button onClick={ onSearch }>찾기</button>
                </div>    

                <div className={ style.searchAgeDiv }>     
                    {   
                        searchAge && (
                            <div className={ style.searchAge }>
                                <p>나이 : { searchAge } </p>
                            </div>
                        )
                    }  
                </div>
            </div>
        </div>
    );
};

export default AddList3;