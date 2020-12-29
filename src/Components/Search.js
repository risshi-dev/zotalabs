import React,{useState} from 'react'
import '../Css/Search.css'

import Weather from './Weather';

function Search() {
     
    const [city,setCity]=useState("")
    const [report,setReport]=useState({})
    const[load,setLoad]=useState(false)


 var search = (event) => 
 { 

              var code = event.keyCode||event.which
                    if(code===13||event.type==="click") 
                           fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=332bee308a0911eb0b8806ee55b08a3d&units=metric`)
                          .then(data => data.json())
                          .then(data => setReport(data))
                          .then(()=> setLoad(true), setCity(""))

}


    return (
        <div className="inputHolder">
  
                                 <input id="input" placeholder="Enter City" value={city} onChange={e=>setCity(e.target.value)} onKeyPress={search}></input>
                                 <button id="button" onClick={search}>search</button>
                                 
                                <div>{load===true?<Weather report={report}/>:''}</div>
        </div>
    )
}

export default Search
