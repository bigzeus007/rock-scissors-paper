import React, { useLayoutEffect } from 'react';
import { useState,useEffect } from 'react';


function MyTableGame() {
    const [numPartie,setNumPartie]=useState(0)
    const [monScore,setMonScore]=useState(0)
    const [sonScore,setSonScore]=useState(0)
    const [monChoix,setMonChoix]=useState("Hello World")
    const images=["rockRobot","scissorsRobot","paperRobot"]
   const myRandomImage =images[Math.floor(Math.random()*images.length)]
   const[sonChoix,setSonChoix]=useState("hey")
   
   
  

    function setJeu(element) {
    }

    useEffect(()=>{if (monChoix[0]===sonChoix[0]){
        
        console.log("EGALITE  ")
    }
    else if (monChoix[0]==="p"&&sonChoix[0]==="r") {
        setMonScore(monScore+1)
        console.log("Vous avez gagne, le Paper gagne")
    }
    else if (monChoix[0]==="p"&&sonChoix[0]==="s") {
        setSonScore(sonScore+1)
        console.log("Vous avez perdu, the Sissors gagne")
    }
    else if (monChoix[0]==="r"&&sonChoix[0]==="s") {
        setMonScore(monScore+1)
        console.log("Vous avez gagne, le Rock gagne")
    }
    else if (monChoix[0]==="r"&&sonChoix[0]==="p") {
        setSonScore(sonScore+1)
        console.log("Vous avez perdu, le Paper gagne")
    }
    else if (monChoix[0]==="s"&&sonChoix[0]==="r") {
        setSonScore(sonScore+1)
        console.log("Vous avez perdu, le Rock gagne")
    }
    else if (monChoix[0]==="s"&&sonChoix[0]==="p") {
        setMonScore(monScore+1)
        console.log("Vous avez gagne, This sissors gagne")
}
        
    },[numPartie])

    return(
        <div id="monJeu">

            <div id="maListeDeChoix">
            
                <button className="rock" onClick={(e)=>{setMonChoix("rock");setSonChoix(myRandomImage);setNumPartie(numPartie+1);}} />
                <button className="scissors" onClick={(e)=>{ setMonChoix("scissors");setSonChoix(myRandomImage);setNumPartie(numPartie+1);}} />
                <button className="paper" onClick={(e)=>{setMonChoix("paper");setSonChoix(myRandomImage);setNumPartie(numPartie+1);}} />
                <div id="monChoix"  className={monChoix} />
            </div>
            <div id="myResult" className={""}>   {sonScore}  {monScore}   </div>
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
