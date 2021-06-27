import React from 'react';
import {useState} from 'react';

function MyEntete({myState:myState}) {
    
    const [myFirstChild,setMyChld1]=useState("ROCK PAPER SCISSORS GAME")
    const [mySecondChild,setMyChild2]=useState("Computer VS Human")
const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
const [myColor,setMyColor]=useState((10000000).toString(16));


/*
switch (myState) {
    case "winner":
        setMyChld1("Winner")
        break;
       default:
        setMyChld1("ROCK PAPER SCISSORS GAME")
        break;
} 
*/

return(
    <>
<div 
    className="myEntete" 
    style={{color:"#"+myColor}}
    children={myFirstChild}
    />
    <div 
    className="myEntete" 
    style={{color:"#"+myColor}}
    children={mySecondChild}    />
    </>
    )


    
}
export default MyEntete;