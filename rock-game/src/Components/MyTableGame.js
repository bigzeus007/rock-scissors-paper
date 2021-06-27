import React, { useLayoutEffect } from 'react';
import { useState,useEffect } from 'react';


function MyTableGame() {
    const numPartie=0
   
    const images=["rockRobot","scissorsRobot","paperRobot"]
   
    const[sonChoix,setSonChoix]=useState("hey")
    const [monChoix,setMonChoix]=useState({monChoix:"monChoix",sonChoix:"sonChoix"})

    function setJeu(element) {
        
        if(numPartie<=4){
           const robotChoix =()=>{return document.getElementById("sonChoix").className}
            if (element===robotChoix()) {console.log("egalite  "+element+' '+robotChoix())}else{console.log("pas Egalite  "+element+' '+robotChoix())
           
    };

        
    }}

    return(
        <div id="monJeu">
        <div id="maListeDeChoix">
    
        <button className="rock" onClick={(e)=>{setMonChoix(monChoix:"rock",sonChoix:{images[Math.floor(Math.random()*images.length)]});setJeu(e.target.className);}}/>
        <button onClick={(e)=>{setMonChoix(monChoix:"scissors",sonChoix:{images[Math.floor(Math.random()*images.length)]});setJeu(e.target.className);}}  className="scissors"/>
        <button onClick={(e)=>{setMonChoix(monChoix:"paper",sonChoix:{images[Math.floor(Math.random()*images.length)]});setJeu(e.target.className);}}  className="paper"/>
        <div id="monChoix" className={monChoix.monChoix} ></div>
        </div>


        <div id="saListeDeChoix">
    
        <button className="rockRobot"/>
        <button className="scissorsRobot"/>
        <button className="paperRobot"/>
        <button  id="sonChoix" className={monChoix.sonChoix}/>
        
        </div>
        </div>
        
    )
    
}

export default MyTableGame;
