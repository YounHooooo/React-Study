import React, { useState } from 'react'

export default function Input() {

    // nubmer
    const [num, setNum] = useState(0);

    // string
    const [text, setText] = useState('');

    // boolean
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
            />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type="checkbox"
                value={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
            />
            {isChecked ? <span>체크됨</span> : <span>체크안됨</span>}
        </div>
    );
}
