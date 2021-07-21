import Button from 'react-bootstrap/Button';
import { BubbleSort, QuickSort, InsertionSort, SelectionSort } from './SortingHelper';
import { useState } from 'react';

const SortingVisualizer = () => {
  const [array, setArray] = useState(generateArray(100));
  const primaryColor = 'pink';
  const secondaryColor = 'red';

  const doAnimations = (animations) => {
    for (let i = 0; i < animations.length; i++) {
      const arrayElements = document.getElementsByClassName('array-bar');
      let bar1 = arrayElements[animations[i][0]].style;
      let bar2 = arrayElements[animations[i][1]].style;

      setTimeout(() => {
        bar1.backgroundColor = secondaryColor;
        bar2.backgroundColor = secondaryColor;
        const bar2height = bar2.height;
        bar2.height = bar1.height;
        bar1.height = bar2height;
      }
      , 3000)
      bar1.backgroundColor = primaryColor;
      bar2.backgroundColor = primaryColor;
    }
  }

  console.log(array)
  return (
    <>
      <Button onClick={() => { setArray(generateArray(100)) }}>Generate New Array</Button>
      <Button onClick={() => {doAnimations(BubbleSort(array))}}>Bubble Sort</Button>
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
