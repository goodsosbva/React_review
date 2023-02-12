import { useCallback, useMemo, useState } from 'react';
import Child from './Child';

function Reactmemo() {
    const [parentAge, setParentAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    };

    const name = useMemo(() => {
        return {
            lastName: 'hong',
            fristName: '길동',
        }
    }, [])

    const tellMe = useCallback(() => {
        console.log('길동이는 행복해!');
    }, []);

    console.log('부모 컴포넌트가 랜더링이 되었어요!')

    return (
        <div style={{ border: '2px solid navy', padding: '10px' }}>
            <h1>부모</h1>
            <p>age: {parentAge}</p>
            <button onClick={incrementParentAge}>부모 나이 증가</button>
        
            <Child name={name} tellMe={tellMe} />
        </div>
    )
}

export default Reactmemo;