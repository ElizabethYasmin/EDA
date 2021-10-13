const {performance} = require('perf_hooks');
var fs = require("fs");

function bblSort(arr){
	let cont=0;
    for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < ( arr.length - i -1 ); j++){
        
        if(arr[j] > arr[j+1]){
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
        }
    }
    }
}

var text = fs.readFileSync("./Output.txt").toString('utf-8');
let startTime = performance.now();
bblSort(text);
let endTime = performance.now();
let cont=(endTime - startTime);
console.log(cont,"\n");




