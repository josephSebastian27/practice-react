import  Axios  from "axios"
import { useEffect } from "react";
import { useState } from "react";

function FetchCat() {

    const [catfact,setCatFact] = useState("");

    useEffect(()=>{
    generate();
    },[])
  
    const generate=()=>{
      Axios.get("https://catfact.ninja/fact").then((res) =>{
        setCatFact(res.data.fact);
      });
    }
   
    return (
      <div>
       <button onClick={generate}>Generate</button>
       <h1>{catfact}</h1>
        </div>
    )
  }
export default FetchCat
