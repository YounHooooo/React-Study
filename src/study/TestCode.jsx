// useState, useRef 

import React, { useState, useRef } from 'react';

export default function TestCode() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const [value, setValue] = useState('');

    console.log('렌더링...');

    const increaseCountState = () => {
        setCount(count + 1);
    }
    
    const decreaseCountState = () => {
        setCount(count - 1);
    }

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log('Ref: ', countRef.current);
    }

    const decreaseCountRef = () => {
        countRef.current = countRef.current - 1;
        console.log('Ref: ', countRef.current);

    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }


    return (
        <>
            <p>State: {count}</p>
            <button onClick={increaseCountState}>State 증가</button>
            <button onClick={decreaseCountState}>State 감소</button>

            <p>Ref: {countRef.current}</p>
            <button onClick={increaseCountRef}>Ref 증가</button>
            <button onClick={decreaseCountRef}>Ref 감소</button>
        
            <p>{value}</p>
            <input type="text" value={value} onChange={handleChange}/>
        </>
    )
}

