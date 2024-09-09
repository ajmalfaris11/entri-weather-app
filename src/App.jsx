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
    <div className='container'>
     <h1>Temparature at {city} is {temperature}</h1>
     <div className='suggestions'>
      <button onClick={() => changeCity("Thiruvananthapuram")}>Thiruvananthapuram</button>
      <button onClick={() => changeCity("Kollam")}>Kollam</button>
      <button onClick={() => changeCity("Pathanamthitta")}>Pathanamthitta</button>
      <button onClick={() => changeCity("Alappuzha")}>Alappuzha</button>
      <button onClick={() => changeCity("Kottayam")}>Kottayam</button>
      <button onClick={() => changeCity("Idukki")}>Idukki</button>
      <button onClick={() => changeCity("Ernakulam")}>Ernakulam</button>
      <button onClick={() => changeCity("Thrissur")}>Thrissur</button>
      <button onClick={() => changeCity("Palakkad")}>Palakkad</button>
      <button onClick={() => changeCity("Malappuram")}>Malappuram</button>
      <button onClick={() => changeCity("Wayanad")}>Wayanad</button>
      <button onClick={() => changeCity("Kozhikode")}>Kozhikode</button>
      <button onClick={() => changeCity("Kannur")}>Kannur</button>
      <button onClick={() => changeCity("Kasargod")}>Kasargod</button>

     </div>
     </div>
  )
}

export default App
