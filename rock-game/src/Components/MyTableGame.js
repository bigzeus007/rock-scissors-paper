import React from 'react';
import { useState } from 'react';


function MyTableGame() {
    const [monChoix,setMonChoix]=useState("Hello World")
    const images=["rockRobot","scissorsRobot","paperRobot"]
    const myRandomImage= Math.floor(Math.random()*images.length)

    const[sonChoix,setSonChoix]=useState("Hey Man")

    return(
        <div id="monJeu">
        <div id="maListeDeChoix">
    
        <button onClick={()=>{setMonChoix("rock");setSonChoix(images[myRandomImage])}} className="rock"/>
        <button onClick={()=>{setMonChoix("scissors");setSonChoix(images[myRandomImage])}} className="scissors"/>
        <button onClick={()=>{setMonChoix("paper");setSonChoix(images[myRandomImage])}} className="paper"/>
        <div id="monChoix" className={monChoix} ></div>
        </div>


        <div id="saListeDeChoix">
    
        <button className="rockRobot"/>
        <button className="scissorsRobot"/>
        <button className="paperRobot"/>
        <button id="sonChoix" className={sonChoix} />
        
        </div>
        </div>
        
    )
    
}

export default MyTableGame;
