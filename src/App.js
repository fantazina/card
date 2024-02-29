import React, { useState } from 'react';
import './App.css';

function App() {

  const[cardDTO, setCardDTO] = useState({
    name : '',
    age : '',
    email : '',
    phone : '',
    gender : 'W'
  })
  
  const onInput = (e) => {
    const {name, value} = e.target

    setCardDTO({
        ...cardDTO,
        [name] : value
    })
  }

  return (
    <div className="App">
      <h1>지나의 명함 만들기</h1>
        <div>
          <p>이름 : <input onChange={ onInput } name='name' value={ cardDTO.name } /></p>
          <p>나이 : <input onChange={ onInput } name='age' value={ cardDTO.age } /></p>
          <p>이메일 : <input onChange={ onInput } name='email' value={ cardDTO.email } /></p>
          <p>전화번호 : <input onChange={ onInput } name='phone' value={ cardDTO.phone } /></p>
          <p>성별 :  
            <input onChange={onInput} type='radio' name='gender' value='W' checked={cardDTO.gender === 'W'}/>여성
            <input onChange={onInput} type='radio' name='gender' value='M' checked={cardDTO.gender === 'M'}/>남성
          </p>
        </div>       
      
        <div className='cardDiv' style={{backgroundColor : cardDTO.gender === 'W' ? 'pink' : 'skyblue' }}>
          <p>{ cardDTO.name }</p>
          <p>{ cardDTO.age }</p>
          <p>{ cardDTO.email }</p>
          <p>{ cardDTO.phone }</p>
        </div>  
        
    </div>
  );
}

export default App;
