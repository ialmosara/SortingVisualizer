const BubbleSort = (array) => {
  let animations = [];
  for (let i = 0; i < array.length-1; i++) {
    for (let j = 0; j < array.length-i-1; j++) {
      if (array[j] > array[j+1]) {
        // Do the
        animations.push([j,j+1]);
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
  return animations;
}

const QuickSort = (array) => {

}

const InsertionSort = (array) => {

}

const SelectionSort = (array) => {

}

module.exports = {
  BubbleSort,
  QuickSort,
  InsertionSort,
  SelectionSort
}
