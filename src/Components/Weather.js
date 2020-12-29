import React from 'react'
import '../Css/Weather.css'

 function Weather({report}) {
     console.log(report)

                  const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    return (

    <div className='weather'>
                
                <div id='temp'>{Math.floor(report.main.temp)}<sup>°</sup></div>
         
                <div><img id="icon" alt="Weather Icon" src={`http://openweathermap.org/img/wn/${report.weather[0].icon}@2x.png`} /></div>
            
                <div id="status">{report.weather[0].main}</div>

                <div id="extras">
            
                               <div className="range">Low <br/><span className="tempText">{Math.floor(report.main.temp_min)}<sup>°</sup></span></div>
                               <div className="range">High <br/><span className="tempText">{Math.floor(report.main.temp_max)}<sup>°</sup></span></div>
               
               </div>
           
               <div id="city">{days[(new Date()).getDay()]} . {report.name}</div>
            
    </div>
    )
}

export default Weather
