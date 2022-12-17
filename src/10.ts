import { readFileSync } from 'fs';
const input: string[] = readFileSync('../inputs/10.txt', 'utf-8').split('\n').slice(0, -1);
//const input: string[] = readFileSync('../inputs/test.txt', 'utf-8').split('\n').slice(0, -1);

let x: number = 1;
let cycleNo: number = 0;
let sum: number = 0;

let cycleToComplete:number = 0;

for(let i:number = 0; i < input.length; i++) {
  const splits:string[] = input[i].split(' ');
  splits.length > 1 ? takeInstruction(splits[0]) : takeInstruction(splits[0].slice(0, -1));

  do {
    cycleNo++;
    if (cycleNo === 20) {
      const signalStrength: number = x * cycleNo;
      sum = sum + signalStrength;
    }
    if (cycleNo === 60) {
      const signalStrength: number = x * cycleNo;
      sum = sum + signalStrength;
    }
    if (cycleNo === 100) {
      const signalStrength: number = x * cycleNo;
      sum = sum + signalStrength;
    }
    if (cycleNo === 140) {
      const signalStrength: number = x * cycleNo;
      sum = sum + signalStrength;
    }
    if (cycleNo === 180) {
      const signalStrength: number = x * cycleNo;
      sum = sum + signalStrength;
    }
    if (cycleNo === 220) {
      const signalStrength: number = x * cycleNo;
      sum = sum + signalStrength;
    }

    cycleToComplete--;
  } while(cycleToComplete > 0);

  splits.length > 1 ? addValue(splits[1]) : addValue("0");
}

function takeInstruction(instruction: string):void {
  //console.log("instruction", instruction);
  if (instruction === 'addx') {
    cycleToComplete = 2;
  }
  else if (instruction === 'noop') {
    cycleToComplete = 1;
  }
}

function addValue(value: string):void {
  x = x + parseInt(value);
}

console.log("sum", sum);
