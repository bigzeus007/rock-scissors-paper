import React from 'react';
import {useState} from 'react';

function MyEntete(myState) {
const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
const randomColor2 = Math.floor(Math.random()*16777215).toString(16);

const [myColor,setMyColor]=useState((10000000).toString(16))
const [myColor2,setMyColor2]=useState((14000000).toString(16))
const myFirstText="ROCK PAPER SCISSORS GAME"
function colorRuning() {
    const myElements=myFirstText.split("")
    console.log(myFirstText.split(""))
}

colorRuning()


return(
    <>
<div 
    className="myEntete" 
    style={{color:"#"+myColor}}
    children={myFirstText}
    />
    <div 
    className="myEntete" 
    style={{color:"#"+myColor}}
    children="Computer VS Human"
    />
    </>
    )


    
}
export default MyEntete;