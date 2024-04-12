import React, { useState } from 'react'

export default function Counters() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    // 0 이하일때는 더이상 값이 내려가지 않도록 if문 사용
    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

  return (
    <>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
  
  )
}
