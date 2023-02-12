import { useState, useRef, useEffect } from 'react';

const UseRef2 = () => {
    const [cnt, setCnt] = useState(1);
    const renderCnt = useRef(0);

    useEffect(() => {
        renderCnt.current += 1;
        console.log('rendering cnt: ', renderCnt.current);
    })

    return (
        <div>
            <p>Cnt: {cnt}</p>
            <button onClick={() => setCnt(cnt + 1)}>Up!</button>
        </div>
    )
}

export default UseRef2;