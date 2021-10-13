const {performance} = require('perf_hooks');
function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

var fs = require("fs");
var text = fs.readFileSync("./Output.txt").toString('utf-8');

let startTime = performance.now();
let a = selectionSort(text,0,text.length-1);
let endTime = performance.now();
console.log((endTime - startTime),"\n");
