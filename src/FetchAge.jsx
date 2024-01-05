import Axios from "axios"
import { useEffect, useState } from "react"



function FetchAge() {

    const [name,setName]= useState('');
    const [age,setAge] =useState({});


    const fetchData = () =>{

        Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>{
            setAge(res.data);
            
        })
    }
    useEffect(()=>{
        fetchData();
    
    },[])


  return (
    <div>
        <input type="text" placeholder="name" onChange={(e) =>{setName(e.target.value)}}/>
        <br />
      <button onClick={fetchData}>Predict Age</button>
      <br />
      <h1>Predicted Age of {age.name} Is :{age.age}</h1>
    </div>
  )
}

export default FetchAge
