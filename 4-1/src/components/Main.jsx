import React, {Component, useState} from 'react';

const Main=() =>{

    const[myName, setMyName]=useState("jieun");

    const changeName =()=>{
        setMyName(myName === "jieun"? "yoyo" : "jieun")
        console.log(myName);
        
    }

    return (
        <div>
        <h1>안녕하세요. {myName}입니다.</h1>
        <button onClick={changeName}>이름바꾸기</button>
        </div>
    );
}

export default Main;