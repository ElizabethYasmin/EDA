const {performance} = require('perf_hooks');

function shellSort(arr)
{
	let n = arr.length;

		for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
		{
		
			for (let i = gap; i < n; i += 1)
			{
			
				let temp = arr[i];


				let j;
				for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
					arr[j] = arr[j - gap];

				arr[j] = temp;
			}
		}
		return arr;
}


var fs = require("fs");
var text = fs.readFileSync("./Output.txt").toString('utf-8');

let startTime = performance.now();
shellSort(text,0,text.length-1);
let endTime = performance.now();
console.log((endTime - startTime),"\n");