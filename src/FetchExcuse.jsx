import Axios from "axios"
import { useEffect, useState } from "react"


function FetchExcuse() {

    const [excuse,setExcuse] =useState('');


    const generate =(ex)=>{
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${ex}/`).then((res) =>{
            setExcuse(res.data[0].ex);
        })
    }
    useEffect(()=>{
        generate();
    },[]);

  return (
    <div>
        <h1>Generate an Excuse</h1>
      <button onClick={generate('party')}>party</button>
      <button onClick={generate('family')}>family</button>
      <button onClick={generate('office')}>office</button>
      <h2>{excuse}</h2>
    </div>
  )
}

export default FetchExcuse
