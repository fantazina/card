import React, { useEffect, useState } from 'react';

const Button = () => {
    const[countA, setCountA] = useState(0)
    const[countB, setCountB] = useState(0)
    const[page, setPage] = useState(0)

    const data = ([
                  { a : '명이노는 바보다', b : '명이노는 몽총이다'},
                  { a : '블랠래', b : '앨랠래'},
                  { a : '틀딱', b : '플딱'},
                  { a : '쓰담쓰담', b : '일줄알았냐'},
                  { a : '루피', b : '보노보노' },
                  { a : '어쩔티비', b : '어쩔가마솥'},
                  { a : '슬리퍼빌런', b : '중고차빌런'},
                  { a : '비트캠프', b : '취업컴퍼니'},
                  { a : '장희수', b : '오연의'},
                  { a : 'ㅗㅗㅗㅗㅗㅗㅗ', b : '뻐큐나 먹어라'}
                ])     

    const onSubA = () => {
        setPage(page + 1)
        setCountA(countA + 1)
    }

    const onSubB = () => {
        setPage(page + 1)
        setCountB(countB + 1)
    }

    return (
        <div>
            <div>
                <p>count A : { countA }</p>
            </div>
            <div>
                <p>count B : { countB }</p>
            </div>

            <div>
                <div>
                    <button onClick={ onSubA }>A : {data[page].a}</button>
                </div>
                <div>
                    <button onClick= {onSubB }>B : {data[page].b}</button>
                </div>
            </div>
        </div>
    );
};

export default Button;