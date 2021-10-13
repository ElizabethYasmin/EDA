const {performance} = require('perf_hooks');
const buildMaxHeap = (arr) => {

    let i = Math.floor(arr.length / 2 - 1);
  
    while (i >= 0) {
      heapify(arr, i, arr.length);
      i -= 1;
    }
}
  
const heapify = (heap, i, max) => {
    let index;
    let leftChild;
    let rightChild;
  
    while (i < max) {
      index = i;
  
      leftChild = 2 * i + 1;
      
      rightChild = leftChild + 1;
  
      if (leftChild < max && heap[leftChild] > heap[index]) {
        index = leftChild;
      }
  
      if (rightChild < max && heap[rightChild] > heap[index]) {
        index = rightChild;
      }
  
      if (index === i) {
        return;
      }
  
      swap(heap, i, index);
  
      i = index;
    }
}
  
const swap = (arr, firstItemIndex, lastItemIndex) => {
    const temp = arr[firstItemIndex];

    arr[firstItemIndex] = arr[lastItemIndex];
    arr[lastItemIndex] = temp;
}
  
const heapSort = (arr) => {
    buildMaxHeap(arr);
  
    lastElement = arr.length - 1;
  
    while (lastElement > 0) {
      swap(arr, 0, lastElement);
      heapify(arr, 0, lastElement);
      lastElement -= 1;
    }
    return arr;
}

var fs = require("fs");
var text = fs.readFileSync("./Output.txt").toString('utf-8');

let startTime = performance.now();
let a = heapSort(text);
let endTime = performance.now();
console.log((endTime - startTime),"\n");