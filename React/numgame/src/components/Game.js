import React, { useState } from "react";

export default function Game(){

    const inputStyle = {
        fontSize : "15pt",
        color : "teal",
    }

    let num = 0;

    const [ text, setText ] = useState('0');
    const [ text2, setText2 ] = useState("0");
    const [ result, setResult ] = useState("결과는..");

    const onTextChange = (e) => {
        setText(Number(e.target.value));
        if(e.target.value <= 0){
            setText(0);
        }else if(e.target.value >= 11){
            setText(10);
            alert("10까지만 입력 가능");
        }
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
    }

    const onClick = () => {
        num = Math.floor(Math.random() * 10);
        setText2(num);

        if(num === text){
            setResult("승리하셨습니다.");
        }else{
            setResult("패배하셨습니다");
        }
    }

    return(
        <div>
            <input 
                placeholder="write your number"
                type="number"
                onChange={onTextChange}
                onKeyPress={onKeyPress}
                value={text}
                className="userNum"
            ></input>
            <span style={inputStyle} className="userInput"> { text } </span>

            <h3 style={inputStyle} className="botInput"> { text2 } </h3>

            <h2>{ result }</h2>
        </div>
    )
}