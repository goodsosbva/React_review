// 출석부
import { useState, useReducer } from 'react';
import Student from './Student';

const initalState = {
    cnt: 0,
    students: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: true,
            };
            return {
                cnt: state.cnt + 1,
                students: [...state.students, newStudent],
            };
        case 'delete-student':
            return {
                cnt: state.cnt - 1,
                students: state.students.filter(student => student.id !== action.payload.id)
            }
        case 'mark-student':
            return {
                cnt: state.cnt,
                students: state.students.map(student => {
                    if (student.id === action.payload.id) {
                        return {...student, isHere: !student.isHere}
                    }
                    return student;
                })
            }
            default:
                return state;
    }
    
 };

function UseReducer2() {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initalState);

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수: { studentsInfo.cnt }</p>
            <input
                type="text"
                placeholder='이름을 입력해주셈'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
                dispatch({ type: 'add-student', payload: { name } })
                setName('');
            }}>추가</button>
            {studentsInfo.students.map(student => {
                return (
                    <Student
                        key={student.id}
                        name={student.name}
                        dispatch={dispatch}
                        id={student.id}
                        isHere={student.isHere}
                    />)
            })}
        </div>
    )
}

export default UseReducer2;