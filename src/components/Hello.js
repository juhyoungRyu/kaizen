import { useState } from 'react';
import UserName from './UserName';

export default function Hello(props) {
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(props.age);

    return (
        <div>
            <h2 id="name">{name}({age})</h2>
            <UserName name={name} />
            <button onClick={()=>{
                setName(name === "Mike" ? "Jane" : "Mike");
                setAge(age +1);
            }}>Change</button>
        </div>
    );
}

