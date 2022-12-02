import { readFileSync } from 'fs';
//const input: string[] = readFileSync('../inputs/test.txt', 'utf-8').split('\n').slice(0, -1);
const input: string[] = readFileSync('../inputs/02.txt', 'utf-8').split('\n').slice(0, -1);

// first column (oponent)
// A - Rock
// B - Paper
// C - Scissors

// second column (you)
// X - Rock
// Y - Paper
// Z - Scissors
//

function roundScore(oponent: string, you: string): number {
  switch(you) {
    case 'X':
    switch(oponent) {
        case 'A':
          return 4;
        case 'B':
          return 1;
        case 'C':
          return 7;
      }
    break;
    case 'Y':
      switch(oponent) {
        case 'A':
          return 8;
        case 'B':
          return 5;
        case 'C':
          return 2;
      }
    break;
    case 'Z':
      switch(oponent) {
        case 'A':
          return 3;
        case 'B':
          return 9;
        case 'C':
          return 6;
      }
    break;
  }
  return 0;
}

let sum: number = 0;

input.forEach((e: string) => {
  let row = e.split('');
  let oponent: string = row[0];
  let you: string = row[2];

  const score: number = roundScore(oponent, you);
  sum = sum + score;
})

console.log("sum", sum);
