import React, { useState } from 'react';
import style from './css/Card.module.css'; 
import data from './DinosaurData' ;

const DinosaurView = ({onPage, select}) => {

    const[viewPg, setViewPg] = useState(select)

    const onPrevious = () => {
        if(viewPg !== 0) {
            setViewPg(viewPg - 1)
        }
    }

    const onNext = () => {
        if(viewPg < data.length - 1) {
            setViewPg(viewPg + 1)
        }
    }

    return (
        <div className={ style.background }>
            <button className={ style.btn } onClick={ () => onPage(0) }>뒤로</button>
                <div className={ style.dinosaurDiv }>
                    <h1>지나가 좋아하는</h1>
                    <div style={{ display : 'flex' }}>
                        <img className={ style.photo } src={ data[viewPg].photo }/>
                        <div className={ style.contents_Div }>
                            <div className={ style.title_Div }>
                                <p>이름 : { data[viewPg].name }</p>
                            </div>

                        <div className={ style.content_Div }>
                        <p>{ data[viewPg].content }</p>
                        </div>

                        <div className={ style.button_Div }>
                            { viewPg > 0 && <button onClick={ onPrevious } style={{ float:'left' }}>{data[viewPg - 1].name}</button> }
                            { viewPg !== data.length - 1 && <button onClick={ onNext } style={{ float:'right' }}>{data[viewPg + 1].name}</button> }
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default DinosaurView;