import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"


const Practice = () => {

  const [name,setName]=useState("");
  const inputEle =useRef("");
  const previousCounter=useRef(0);
  const [counter,setCounter]=useState(0);

  const reset=()=>{
    setName("");
    inputEle.current.focus();
  }

  useEffect(()=>{

    previousCounter.current=counter;

  },[counter]);


  const resetNum=()=>{
    setCounter(0);
    previousCounter.current=0;
  }
 
  return (
    <div>
   
   <input type="text" value={name} name="name"  ref={inputEle} onChange={(e)=>setName(e.target.value)}/>
   <button onClick={reset}>reset</button>
   <h1>Hello ,{name}</h1>


    <div>
      <h2>Random Counter: {counter}</h2>
      {typeof previousCounter.current !== "undefined" && (<h2>Previous Counter : {previousCounter.current}</h2>)}
      <button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}>Generate Random Number</button>
      <br />
      <br />
      <button onClick={resetNum}>Reset</button>
    </div>
  
    </div>
  )
}

export default Practice
