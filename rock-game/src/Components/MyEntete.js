import React from 'react';


function MyEntete() {
    
    const myFirstChild="ROCK PAPER SCISSORS GAME"
    const mySecondChild="Computer VS Human"
    const myColor=(10000000).toString(16)

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