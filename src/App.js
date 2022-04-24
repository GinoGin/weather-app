import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'

import React, { useState} from 'react';
import axios from 'axios';


function App() {
  const[loc,setLoc]=useState()
  const[Data,setData]= useState()
  const[imgs,setImgs]=useState()
  const[toggle,setToggle]=useState(true)
  

  
  

  const fetchData=async()=>{
    const req=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=176265fc5ebc4820b3fc30f8f4255358`)
    setData(req.data)
    setImgs(req.data.weather[0].icon);
    setToggle(false)
    console.log(req);
  }


  return (
    <>
    {
      toggle?
        
        <div className="first">
        <h1>Google Weather App</h1>
         <p>Powered by Google</p>
         <TextField id="standard-basic" label="Enter Location" variant="standard" onChange={(e)=>{setLoc(e.target.value)}}/><br/><br/>
         <Button variant="contained" onClick={fetchData}>Search</Button>
       </div>
       :
       <div className='second'>
         <h1>{Data.name}</h1>
         <h2>Temperature: {Data.main.temp}</h2>
         <img src={"http://openweathermap.org/img/wn/"+imgs+"@2x.png"} alt=""/>
         <h1>{Data.weather[0].main}</h1>
         <Button variant="contained" onClick={()=>{setToggle(true)}}>Back</Button>
       </div>
      }
    </>
    
  );
}

                               

export default App;
