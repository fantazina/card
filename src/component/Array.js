import React, { useState } from 'react';

const Array = () => {
    const [data, setData] = useState(['금자', '양이', '퀸토', '윤복', '서리', '지나'])
    const [userList, setUserList] = useState([
        {name : '금자' , age : 20}, 
        {name : '양이' , age : 4}, 
        {name : '퀸토' , age : 12}, 
        {name : '윤복' , age : 12}, 
        {name : '서리' , age : 10}, 
        {name : '지나' , age : 35}])

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
            <div>
                { userList.find(item => item.name === '퀸토').name }
                { userList.find(item => item.name === '퀸토').age }
            </div> 
            {/* find로 '퀸토' 아이템을 찾고 <div>안에 find로 찾은 item을 {}에 담아서 출력 */}
        </div>
    );
};

export default Array;