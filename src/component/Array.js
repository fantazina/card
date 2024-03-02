import React, { useState } from 'react';

const Array = () => {
    const [data, setData] = useState(['금자', '양이', '퀸토', '윤복', '서리', '지나'])

    return (
        <div>
            {
                data.map((item ,index) => <div>{item}</div>)
            }
            <br/>
            {
                data.filter(item => item !== '윤복').map((item ,index) => <div>{item}</div>)
            }
            <br/>
            {
                <div>{ data.find(item => item === '퀸토')}</div> // find로 '퀸토' 아이템을 찾고 <div>안에 find로 찾은 item을 {}에 담아서 출력
            }
        </div>
    );
};

export default Array;