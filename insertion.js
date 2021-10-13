const {performance} = require('perf_hooks');

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

var fs = require("fs");
var text = fs.readFileSync("./Output.txt").toString('utf-8');

let startTime = performance.now();
let a = insertionSort(text);
let endTime = performance.now();
console.log((endTime - startTime),"\n");