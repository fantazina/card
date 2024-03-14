import React, { useState } from 'react';
import DinosaurView from './DinosaurView';
import DinosaurList from './DinosaurList';

const DinosaurMain = () => {
    
    const[page, setPage] = useState(0)
    const[select, setSelect] = useState(null)

    const onPage = (num) => {
        setPage(num)
    }

    const onSelect = (num) => {
        setSelect(num)
    }

    return (
        <div>
            { page === 0 && <DinosaurList onPage={ onPage } onSelect={ onSelect } /> }
            { page === 1 && <DinosaurView onPage={ onPage } select={ select }/> }
        </div>
    );
};

export default DinosaurMain;