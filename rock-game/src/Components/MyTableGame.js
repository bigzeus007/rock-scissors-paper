import React, { useLayoutEffect } from 'react';
import { useState,useEffect } from 'react';


function MyTableGame() {
    const [numPartie,setNumPartie]=useState(0)
    const [monScore,setMonScore]=useState(0)
    const [sonScore,setSonScore]=useState(0)
    const [monScoreF,setMonScoreF]=useState(0)
    const [sonScoreF,setSonScoreF]=useState(0)
    const [monChoix,setMonChoix]=useState("Hello World")
    const [myAvatar,setMyAvatar]=useState("Start")
    const [hisAvatar,setHisAvatar]=useState("Start2")
    const images=["rockRobot","scissorsRobot","paperRobot"]
   const myRandomImage =images[Math.floor(Math.random()*images.length)]
   const[sonChoix,setSonChoix]=useState("hey")
   
   
  

    function setJeu(element) {
    }

    useEffect(()=>{if (monChoix[0]===sonChoix[0]){
        setMyAvatar("myEgalite")
        setHisAvatar("hisEgalite")
        console.log("EGALITE  ")
    }
    else if (monChoix[0]==="p"&&sonChoix[0]==="r") {
        setMonScore(monScore+1)
        setMyAvatar("iAmWinner")
        setHisAvatar("youLoose")
        console.log("Vous avez gagne, le Paper gagne")
    }
    else if (monChoix[0]==="p"&&sonChoix[0]==="s") {
        setSonScore(sonScore+1)
        setMyAvatar("iLoose")
        setHisAvatar("urWinner")
        console.log("Vous avez perdu, the Sissors gagne")
    }
    else if (monChoix[0]==="r"&&sonChoix[0]==="s") {
        setMonScore(monScore+1)
        setMyAvatar("iAmWinner")
        setHisAvatar("youLoose")
        console.log("Vous avez gagne, le Rock gagne")
    }
    else if (monChoix[0]==="r"&&sonChoix[0]==="p") {
        setSonScore(sonScore+1)
        setMyAvatar("iLoose")
        setHisAvatar("urWinner")
        console.log("Vous avez perdu, le Paper gagne")
    }
    else if (monChoix[0]==="s"&&sonChoix[0]==="r") {
        setSonScore(sonScore+1)
        setMyAvatar("iLoose")
        setHisAvatar("urWinner")
        console.log("Vous avez perdu, le Rock gagne")
    }
    else if (monChoix[0]==="s"&&sonChoix[0]==="p") {
        setMonScore(monScore+1)
        setMyAvatar("iAmWinner")
        setHisAvatar("youLoose")
        console.log("Vous avez gagne, This sissors gagne")
}
    },[numPartie])
    useEffect(()=>{
    
        if(monScore>=5){
            setMyAvatar("iAmBigWinner")
            setHisAvatar("youBigLoose")
            setSonScore(0)
            setMonScore(0)
            setMonScoreF(monScoreF+1)
        }
        if(sonScore>=5){
            setMyAvatar("iBigLoose")
            setHisAvatar("urBigWinner")
            setSonScore(0)
            setMonScore(0)
            setSonScoreF(sonScoreF+1)
        }
        })
    return(
        <div id="monJeu">
            <div id="saListeDeChoix">
            <button className="rockRobot"/>
            <button className="scissorsRobot"/>
            <button className="paperRobot"/>
        </div>
            
            <div id="myResult" className={""}>
            <div id="sonScoreF" className="sonScoreF" style={{position:"relative",left:"150px",height:"50px",width:"400px",backgroundColor:"lime",fontSize:"30px",}} children={"La Machine a gagne "+sonScoreF+" Match"}/>
            <div id="monScoreF" className="monScoreF" style={{position:"relative",left:"150px",height:"50px",width:"400px",backgroundColor:"lime",fontSize:"30px",}} children={"J ai gagne "+monScoreF+" Match"}/>
            <div id="sonScore" className="sonScore" style={{position:"relative",left:"200px",height:"50px",width:"300px",fontSize:"30px",}} children={"Score Machine "+sonScore}/>
            <div id="monScore" className="monScore" style={{position:"relative",left:"200px",height:"50px",width:"300px",fontSize:"30px",}} children={"Mon Score "+monScore}/>
            <span className={hisAvatar} style={{backgroundColor:"teal"}}></span>
            <span className={myAvatar} style={{backgroundColor:"blue"}}></span>
            <button  id="sonChoix" className={sonChoix}/>
            <button id="monChoix"  className={monChoix} />  
            
              
            </div>
            <div id="maListeDeChoix">
            
            <button className="rock" onClick={(e)=>{setMonChoix("rock");setSonChoix(myRandomImage);setNumPartie(numPartie+1);}} />
            <button className="scissors" onClick={(e)=>{ setMonChoix("scissors");setSonChoix(myRandomImage);setNumPartie(numPartie+1);}} />
            <button className="paper" onClick={(e)=>{setMonChoix("paper");setSonChoix(myRandomImage);setNumPartie(numPartie+1);}} />
            
        </div>
            
        </div>
        
    )
    
}

export default MyTableGame;
