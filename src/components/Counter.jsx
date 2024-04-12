import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)

    const updateCount = (arg) => {
        setCount(count + arg);
    }

    return (
        <div>
            <button onClick={() => updateCount(-1)}>-</button>
            <span>{count}</span>
            <button onClick={() => updateCount(+1)}>+</button>
        </div>
  )
}
