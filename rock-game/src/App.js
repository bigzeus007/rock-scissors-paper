import MyEntete from './Components/MyEntete';
import { useState } from 'react';
import './App.css';
import MyTableGame from './Components/MyTableGame'

function App() {

  const [myState,setMyState]=useState("")
 
  return (
    <>
    <MyEntete myState={myState} ></MyEntete>
    <MyTableGame/>
    
    </>
  );
}

export default App;
