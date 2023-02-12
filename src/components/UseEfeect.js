import { useState, useEffect } from 'react';

function UseState() {
    const [cnt, setCnt] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCnt(cnt + 1);
    }

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    // 랜더링 될때마다 매번 실행됨.
    // 마운트 + [ item ] 값이 바뀔때마다 실행
    useEffect(() => {
        console.log('rendering!')
    }, [cnt])

    return (
        <div>
            <button onClick={handleCountUpdate}>Upload</button>
            <span>cnt: {cnt}</span>
            <input type="text" value={name} onChange={handleInputChange} />
            <span>name: {name}</span>
        </div>
    )
}

export default UseState;