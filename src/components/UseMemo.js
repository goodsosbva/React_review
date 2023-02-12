import { useState, useMemo } from 'react';

const hardCaculate = (number) => {
    console.log('difficult caculate!');
    for (let i = 0; i < 999999999; i++) { }
    return number + 100000;
}

const easyCaculate = (number) => {
    console.log('easy caculate!');
    return number + 1;
}

function UseMemo() {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // const hardSum = hardCaculate(hardNumber);
    const hardSum = useMemo(() => {
        return hardCaculate(hardNumber);
    }, [hardNumber])
    const easySum = easyCaculate(easyNumber);

    return (
        <div>
            <h3>difficult caculater</h3>
            <input
                type="number"
                value={hardNumber}
                onChange={(e) => setHardNumber(parseInt(e.target.value))}
            ></input>
            <span> + 100000 = {hardSum}</span>

            <h3>easy caculater</h3>
            <input
                type="number"
                value={easyNumber}
                onChange={(e) => setEasyNumber(parseInt(e.target.value))}
            ></input>
            <span> + 1 = {easySum}</span>
        </div>
    )
}

export default UseMemo;