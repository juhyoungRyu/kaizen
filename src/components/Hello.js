import { useState } from 'react';

export default function Hello() {
    const [name, setName] = useState("Mike");
    
    function changeName(){
        setName(name === "Mike" ? "Jane" : "Mike");
    }

    return (
        <div>
            <h1>Hello</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
}

