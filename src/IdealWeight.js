import React, { useState } from 'react';

const IdealWeight = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState('');

  const calculateIdealWeight = () => {
    if (height && weight && gender) {
      const heightInMeters = height / 100; // Convert height from cm to meters
  
      // Calculate ideal weight based on gender and height
      let idealWeight;
      if (gender === 'male') {
        idealWeight = 50 + 0.91 * (heightInMeters - 1.52);
      } else if (gender === 'female') {
        idealWeight = 45.5 + 0.91 * (heightInMeters - 1.52);
      }
  
      // Set the ideal weight state variable
      setResult(calculateResult(weight, idealWeight));
    }
  };
  

  const calculateResult = (weight, idealWeight) => {
    if (weight < idealWeight) {
      return `You need to gain weight. Ideal weight is ${idealWeight.toFixed(2)} kg.`;
    } else if (weight > idealWeight) {
      return `You need to lose weight. Ideal weight is ${idealWeight.toFixed(2)} kg.`;
    } else {
      return 'Your weight is ideal.';
    }
  };

  return (
    <div>
      <h2>Ideal Weight Calculator</h2>
      <div>
        <label>Height (in cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Weight (in kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button onClick={calculateIdealWeight}>Calculate</button>
      <div>{result}</div>
    </div>
  );
};

export default IdealWeight;
