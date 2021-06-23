import MyEntete from './Components/MyEntete';
import { useState } from 'react';
import './App.css';

function App() {

  const [myState,setMyState]=useState("Start")
  return (
    <>
    <MyEntete myState={myState} ></MyEntete>
    
    </>
  );
}

export default App;
