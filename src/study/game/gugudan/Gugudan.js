import React, { useState } from 'react';

export default function gugudan() {
    const [dan, setDan] = useState('');
    const [result, setResult] = useState([]);

    const handleChange = (e) => {
        setDan(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dan === '') return;

    const newResult = [];
    for (let i = 1; i <= 9; i++) {
      newResult.push(`${dan} × ${i} = ${dan * i}`);
    }
    setResult(newResult);
    };

  return (
    <div>
        <from onSubmit={handleSubmit}>
            <input 
                type="number"
                value={dan}
                onChange={handleChange}
                placeholder="숫자를 입력하세요"
            />
            <button onClick={handleChange}>구구단 출력</button>
        </from>
        <ul>
            {result.map((item, index) => {
                <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  );
};
