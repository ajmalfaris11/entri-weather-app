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
    switch(city) {
      case "Thiruvananthapuram":
        latitude = 8.5241;
        longitude = 76.9366;
        console.log("It's Thiruvananthapuram");
        break;
      case "Kollam":
        latitude = 8.8911;
        longitude = 76.6141;
        console.log("It's Kollam");
        break;
      case "Pathanamthitta":
        latitude = 9.2660;
        longitude = 76.7824;
        console.log("It's Pathanamthitta");
        break;
      case "Alappuzha":
        latitude = 9.4981;
        longitude = 76.3384;
        console.log("It's Alappuzha");
        break;
      case "Kottayam":
        latitude = 9.5916;
        longitude = 76.5226;
        console.log("It's Kottayam");
        break;
      case "Idukki":
        latitude = 9.9251;
        longitude = 77.0840;
        console.log("It's Idukki");
        break;
      case "Ernakulam":
        latitude = 9.9816;
        longitude = 76.2999;
        console.log("It's Ernakulam");
        break;
      case "Thrissur":
        latitude = 10.5276;
        longitude = 76.2144;
        console.log("It's Thrissur");
        break;
      case "Palakkad":
        latitude = 10.7760;
        longitude = 76.6547;
        console.log("It's Palakkad");
        break;
      case "Malappuram":
        latitude = 11.0978;
        longitude = 76.0719;
        console.log("It's Malappuram");
        break;
      case "Wayanad":
        latitude = 11.6828;
        longitude = 76.0077;
        console.log("It's Wayanad");
        break;
      case "Kozhikode":
        latitude = 11.2588;
        longitude = 75.7804;
        console.log("It's Kozhikode");
        break;
      case "Kannur":
        latitude = 11.8727;
        longitude = 75.3704;
        console.log("It's Kannur");
        break;
      case "Kasargod":
        latitude = 12.4993;
        longitude = 75.0214;
        console.log("It's Kasargod");
        break;
      default:
        console.log("City not found");
        latitude = null;
        longitude = null;
        break;
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
     <h1 className='Display'>Temparature at {city} is {temperature}</h1>
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
