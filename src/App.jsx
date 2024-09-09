import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState("Kochi");
  const [temperature, setTemperature] = useState("not found");

  function changeCity(selectedCity){
    setCity(selectedCity)
    console.log(city);
  }

  // use effect using for run while loading the page
  useEffect(() => {
    let latitude ;
    let longitude ;
    if(city === "Kochi"){
       latitude = 9.9312;
       longitude = 76.2673;
      console.log("its kochi temp")
    }

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    .then(response => response.json())
    .then(data => {
      console.log(data.current.
        temperature_2m);
        setTemperature (data.current.temperature_2m);
    },[city])
    .catch(error => {
      console.log(error);
    })
  })

  return (
    <>
     <h1>Temparature at {city} is {temperature}</h1>
     <div className='suggestions'>
      <button onClick={() => changeCity("Kochi")}>Kochi</button>
      <button onClick={() => changeCity("Tiruvanandrum")}>Tiruvanandrum</button>
      <button onClick={() => changeCity("Kottayam")}>Kottayam</button>
     </div>
    </>
  )
}

export default App
