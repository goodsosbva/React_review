import { useState, useRef } from 'react';

const UseRef = () => {
    const [render, setRenderer] = useState(0);
    const constRef = useRef(0);
    let constVar = 0;

    const doRendering = () => {
        setRenderer(render + 1);
    }

    const increaseCntState = () => {
        constVar += 1;
        console.log(constVar);
    };

    const increaseCntRef = () => {
        constRef.current += 1;
        console.log(constRef.current);
    }

    return (
        <div>
            <button onClick={doRendering}>Rendering!</button>
            <p>Var: {constVar}</p>
            <p>Ref: { constRef.current }</p>
            <button onClick={increaseCntState}>Var Up!</button>
            <button onClick={increaseCntRef}>Ref Up!</button>
        </div>
    )
}

export default UseRef;