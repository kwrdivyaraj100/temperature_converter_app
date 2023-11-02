import { useState } from 'react';
import './App.css';

function App() {

  const [tempObj, setTempObj] = useState({
    scale: 'celsius',
    temperature: 0
  });

  const celsius = 0;
  const fahrenheit = 0;
  const kelvin = 0;

  function onCelsiusChange(tempValue){
    setTempObj({
      scale: 'celsius',
      temperature: isNaN(tempValue) ? 0 : tempValue,
    });

  }

  function onFahrenheitChange(tempValue){
    setTempObj({
      scale: 'fahrenheit',
      temperature: isNaN(tempValue) ? 0 : tempValue,
    });
    
  }
  function onKelvinChange(tempValue){
    setTempObj({
      scale: 'kelvin',
      temperature: isNaN(tempValue) ? 0 : tempValue,
    });
  }

  return (
    <div style={{"textAlign": "center"}}>
      <h2>Celsius: <Child temperature = {celsius} onTemperatureChange = {onCelsiusChange}/></h2>
      <h2>Fahrenheit: <Child temperature = {fahrenheit} onTemperatureChange = {onFahrenheitChange}/></h2>
      <h2>kelvin: <Child temperature = {kelvin} onTemperatureChange = {onKelvinChange}/></h2>
    </div>
  );
}

export default App;
