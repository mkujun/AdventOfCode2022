import { readFileSync } from 'fs';
const input: string[] = readFileSync('../inputs/06.txt', 'utf-8').split('').slice(0, -2);
//const input: string[] = readFileSync('../inputs/test.txt', 'utf-8').split('').slice(0, -2);

function uniqueMarker(pattern: string[]): boolean {
  let uniqueChars: string[] = [... new Set(pattern)];

  return uniqueChars.length === 4 ? true : false;
}

for(let i: number = 3; i <= input.length; i++) {
  const step: string[] = [];
  step.push(input[i - 3]);
  step.push(input[i - 2]);
  step.push(input[i - 1]);
  step.push(input[i]);

  if (uniqueMarker(step)) {
    console.log("part 1", i + 1);
    break;
  }
}
