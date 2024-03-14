import React, { useState } from 'react';
import data from './DinosaurData' ;
import style from './css/Card.module.css'; 

const DinosaurList = ({onPage, onSelect}) => {

    const dinosaurclick = (index) => {
        onSelect(index)
        onPage(1)
    }

    return (
        <div className={ style.backgroundImg}>
            <div className={ style.dinosaurList }>
                { 
                    data.map((dinosaur, index) =>
                        <div key={ index }>
                            <img onClick={ () => dinosaurclick(index) } className={ style.dinosaurImg } src={ dinosaur.photo }/>
                        </div>
                    ) 
                }
            </div>
        </div>
    );
};

export default DinosaurList;