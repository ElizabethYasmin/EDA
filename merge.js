const {performance} = require('perf_hooks');
var fs = require("fs");

function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; 
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; 
      }
    }
  
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }

  function mergeSort (unsortedArray) {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);
  
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
  
    return merge(
      mergeSort(left), mergeSort(right)
    );
  }

var fs = require("fs");
var text = fs.readFileSync("./Output.txt").toString('utf-8');

let startTime = performance.now();
let a = mergeSort(text);
let endTime = performance.now();
console.log((endTime - startTime),"\n");