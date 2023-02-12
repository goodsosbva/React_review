import { useEffect, useState, useMemo } from 'react';

function UseMemo2() {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국',
        };
    }, [isKorea])
    // const location = {
    //     country: isKorea ? '한국' : '외국',
    // };

    useEffect(() => {
        console.log('useEffect 호출');
    }, [location])

    return (
        <div>
            <h2>하루에 몇끼 먹음?</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.vlaue)}
            ></input>
            <hr />
            <h2>어느 나라에 있음?</h2>
            <p>나라: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    )
}

export default UseMemo2;