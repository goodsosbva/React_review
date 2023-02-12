import { useState } from 'react';

const heavyWork = () => {
    console.log('heavy work!');
    return ['khs', 'son']
}

function UseState() {
    // 처음 랜더링시만 무거운 작업을 한 번하게 하귀 위해
    // 화살표함수 이용.
    const [names, setName] = useState(() => {
        return heavyWork();
    });
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const handleUpload = () => {
        setName((prevName) => {
            return ([input, ...prevName])
        })
        setInput('')
    }
    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleUpload}>Upload</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>;
            })}
        </div>
    )
}

export default UseState;