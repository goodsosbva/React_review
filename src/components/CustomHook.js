import { useState } from 'react';
import { useInput } from './UseInput';

function displayMessage(message) {
    alert(message);
}

function CustomHook() {
    const [inputValue, handleChange, handleSubmit] = useInput("hi", displayMessage);
    
    return (
      <div>
        <h1>useInput</h1>
        <input value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>확인</button>
      </div>
    );
        
}

export default CustomHook;