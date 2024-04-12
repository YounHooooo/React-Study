import React, { useState, useRef } from 'react'

export default function TestCode() {

    const [count, setCount] = useState(0);
    const countRef = TestCode(0);

    console.log('렌더링...');

    const increaseCountState = () => {
        setCount(count + 1);
    }

    const increaseCountRef = () => {
        increaseCountRef.current = countRef.current + 1;
        console.log('Ref: ', countRef.current);
    }

    return (
        <div>
            <p>State: {count}</p>
            <p>Ref: {countRef.current}</p>
            <button onClick={increaseCountState}>State 증가</button>
            <button onClick={increaseCountRef}>Ref 증가</button>
        </div>
    )
}
