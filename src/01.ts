import { readFileSync } from 'fs';
const file: number[] = readFileSync('../inputs/01.txt', 'utf-8').split('\n').slice(0, -1).map(Number);

let sum: number = 0;
let max: number = 0;

file.forEach((e: number) => {
  if(e > 0) {
    sum = sum + e;
  }
  else {
    if (sum > max) {
      max = sum;
    }
    sum = 0;
  }
})

console.log("max", max);
