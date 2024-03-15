import React, { useState } from 'react';
import data from './DinosaurData' ;
import style from './css/Card.module.css'; 

const DinosaurList = ({onSelect}) => {

    const[search, setSearch] = useState('')
    const[searchResult, setSearchResult] = useState([])

    const dinosaurclick = (index) => {
        const dataIndex = searchResult.length > 0 ? searchResult[index] : data[index]
        onSelect(data.indexOf(dataIndex))
    }

    const searchIn = (e) => {
        const { value } = e.target
        setSearch(value)
    } 

    const onSearch = () => {
        const result = data.filter(item => item.name.includes(search))
        setSearchResult(result)
        
        if(result.length === 0) {
            alert('검색 결과가 없습니다.')
            setSearch('')
        }
    }

    return (
        <div className={ style.backgroundImg}>
            <div className={ style.searchInput }>
                <input onChange={ searchIn } value={ search }></input>
                <button onClick={ onSearch }>찾기</button>
            </div>
                <div className={ style.dinosaurList }>
                    { 
                        searchResult.length > 0 ? (
                            searchResult.map((dinosaur, index) => (
                            <div key={ index }>
                                <img onClick={ () => dinosaurclick(index) } className={ style.dinoResult } src={ dinosaur.photo }/>
                            </div>
                        ))
                      )
                      : 
                      (
                        data.map((dinosaur, index) => (
                            <div key={ index }>
                                <img onClick={ () => dinosaurclick(index) } className={ style.dinosaurImg } src={ dinosaur.photo }/>
                            </div>
                       ))
                    )}
                </div>
        </div>
    );
};

export default DinosaurList;