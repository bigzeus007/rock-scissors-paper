import React, { useLayoutEffect } from 'react';
import { useState,useEffect } from 'react';


function MyTableGame() {
    const numPartie=0
    const [monChoix,setMonChoix]=useState("Hello World")
    const images=["rockRobot","scissorsRobot","paperRobot"]
   const myRandomImage =images[Math.floor(Math.random()*images.length)]
   const[sonChoix,setSonChoix]=useState("hey")
   
   
  

    function setJeu(element) {
    }

    useEffect(()=>{if (monChoix[0]===sonChoix[0]) 
        {console.log("egalite  "+monChoix+' '+sonChoix)
    }else{
        console.log("pas Egalite  "+" son choix "+sonChoix+" Mon choix "+monChoix)}
        
    })

    return(
        <div id="monJeu">
        <div id="maListeDeChoix">
    
        <button className="rock" onClick={(e)=>{setMonChoix("rock");setSonChoix(myRandomImage)}} />
        <button className="scissors" onClick={(e)=>{ setMonChoix("scissors");setSonChoix(images[Math.floor(Math.random()*images.length)]);}} />
        <button className="paper" onClick={(e)=>{setMonChoix("paper");setSonChoix(images[Math.floor(Math.random()*images.length)]);}} />
        <div id="monChoix"  className={monChoix} />
        </div>


        <div id="saListeDeChoix">
    
        <button className="rockRobot"/>
        <button className="scissorsRobot"/>
        <button className="paperRobot"/>
        <button  id="sonChoix" className={sonChoix}/>
        
        </div>
        </div>
        
    )
    
}

export default MyTableGame;
