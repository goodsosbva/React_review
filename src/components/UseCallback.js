import { useEffect, useState, useCallback } from 'react';

function UseCallback() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);
    
    // toggle만 바뀔 경우, 의존성 배열의 number가 바뀌지 않았기 때문에
    // someFunction함수가 업데이트 되지 않는 모습.
    const someFunction = useCallback(() => {
        console.log(`someFunc: number ${number}`);
        return;
    }, [number])

    useEffect(() => {
        console.log("someFunction이 변경되었습니다!")
    }, [someFunction]);
    
    return (
        <div>
            <input
                type="number"
                value={number}
                onChange = {(e) => setNumber(e.target.value)}
            />
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br />
            <button onClick={someFunction}>Call someFunc</button>
        </div>
    )
}
export default UseCallback;