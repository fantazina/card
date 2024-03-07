import React, { useState } from 'react';
import style from './css/Card.module.css';

const Post = () => {
    const[postDTO, setPostDTO] = useState({
        title : '',
        content : ''
    })
    const[data, setData] = useState([])
    const[page, setPage] = useState(0)

    const onInput = (e) => {
        const { name, value } = e.target
        setPostDTO({
            ...postDTO,
            [name] : value
        })
    }

    const addItem = () => {
        if(postDTO.title !== '' && postDTO.content !== '') {
            setData([...data, postDTO])
            setPostDTO({
                title : '',
                content : ''
            })
        }  
    }

    const onPrevious = () => {
        if(page !== 0) {
            setPage(page - 1)
        }
    }

    const onNext = () => {
        if(page < data.length - 1) {
            setPage(page + 1)
        }
    }

    return (
        <div>
            <div className={ style.postDiv}>
                <p>제목 : <input onChange={ onInput } name='title' value={ postDTO.title } /></p>
                <p>내용 : <textarea onChange={ onInput } name='content' value={ postDTO.content } /></p>
            </div>
            <button className={ style.btn} onClick={ addItem }>추가</button>

           {
                data.length > 0 &&      

                    <div className={ style.container }>
                        <div className={ style.titleDiv }>
                            <p>제목 : {data[page].title}</p>
                        </div>

                        <div className={ style.contentDiv }>
                            <p>내용 : {data[page].content}</p>
                        </div>

                        <div className={ style.buttonDiv }>
                            <button onClick={ onPrevious }>◀</button>
                            <button onClick={ onNext }>▶</button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Post;