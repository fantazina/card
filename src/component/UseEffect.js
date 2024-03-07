import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const[a, setA] = useState('')
    const[b, setB] = useState('')

    useEffect(() => {
        setB(a)

    }, [a])

    return (
        <div>
            <div style={{ textAlign : 'center' }}>
                <p><input onChange={ (e) => setA(e.target.value) } value={a}/></p>
                <p>a : {a}</p>
                <p>b : {b}</p>
            </div>
        </div>
    );
};

export default UseEffect;