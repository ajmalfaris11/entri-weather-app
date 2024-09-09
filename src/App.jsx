import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState("Kochi");

  function changeCity(selectedCity){
    setCity(selectedCity.target.dataset.city)
    console.log(city);
  }


  return (
    <>
     <h1>Temparature at {city} is 27&deg;C</h1>
     <div className='suggestions'>
      <button onClick={() => changeCity("Kochi")}>Kochi</button>
      <button onClick={() => changeCity("Tiruvanandrum")}>Tiruvanandrum</button>
      <button onClick={() => changeCity("Kottayam")}>Kottayam</button>
     </div>
    </>
  )
}

export default App
