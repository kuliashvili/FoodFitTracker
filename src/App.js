import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const APP_ID = '0b6a6537';
  const API_KEY = '3cff7ff6aabeefac5115b864faf35bf7';
  const [inputValue, setInputValue] = useState('')
  const [inputQuantityValue, setInputQuantityValue] = useState()
  // let food = document.getElementById('food-input').value
  const ingr = 'egg'; // Example ingredient
  const [calories, setCalories] = useState('')
  const [weight, setWeight] = useState('')  

  const updateInputValue = (e) => {
    let foodName = e.target.value
    setInputValue(foodName)
    console.log(foodName)
    
  }
  const updateInputQuantityValue = (e) => {
    let foodQuantity = e.target.value
    setInputQuantityValue(foodQuantity)
    console.log(foodQuantity)
    
  }
console.log(inputValue)
  useEffect(() => {
    axios
      .get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${API_KEY}&ingr=${inputQuantityValue == undefined ? "1" + inputValue : inputQuantityValue + inputValue}`)
      .then(res => {
        // console.log(res.data.calories);
        setCalories(res.data.calories)
        // console.log(res.data.totalWeight);
        setWeight(res.data.totalWeight)
        
      })
      .catch(err => console.log(err));
  });

  return (
    <div className="App">
      <h2>input food:</h2>
      <input onChange={updateInputValue} id='food-input' className='food-input' type="text"  />
      <h2>input food quantity:</h2>
      <input onChange={updateInputQuantityValue} className='foot-input' type="text" />
      <h1 className='food'>{inputValue == "" ? "write food in input :)" : inputValue}</h1>
      <h1>{"calories of the food = " + calories + " cal"}</h1>
      <h1>{"weight of the food = " + weight + " gr"}</h1>
    </div>
  );
}

export default App;
