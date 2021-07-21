import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const SortingVisualizer = () => {
  const [array, setArray] = useState(generateArray(100));
  console.log(array)
  return (
    <>
      <Button onClick={() => { setArray(generateArray(100)) }}>Generate New Array</Button>
      <div className='bar-holder'>
        {array.map((value, idx) => (
          <div className='array-bar' key={idx} style={{height: `${value*5}px`}}>
          </div>
        ))}
      </div>
    </>
  )
}

const generateArray = (num) => {
  let randomNumArray = [];
  console.log(num)
  for (let i = 0; i < num; i++) {
    randomNumArray.push(generateRandomNumber(num, 5));
  }
  return randomNumArray;
}

const generateRandomNumber = (max, min) => {
  return Math.floor(Math.random() * (max-min+1))+min;
}

export default SortingVisualizer;
