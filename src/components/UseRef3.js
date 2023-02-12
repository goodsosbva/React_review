import { useEffect, useRef } from 'react';

const UseRef3 = () => {
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, [])

    const login = () => {
        alert(`welcome ${inputRef.current.value}`);
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username"></input>
            <button onClick={login}>login</button>
        </div>
    )
};

export default UseRef3;