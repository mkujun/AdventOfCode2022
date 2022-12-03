import { readFileSync } from 'fs';
//const input: string[] = readFileSync('../inputs/test.txt', 'utf-8').split('\n').slice(0, -1);
const input: string[] = readFileSync('../inputs/03.txt', 'utf-8').split('\n').slice(0, -1);

function letterValue(letter: string): number {
  const letters: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  return letters.indexOf(letter) + 1;
}

function splitCompartments(row: string): string[] {
  const half: number = Math.ceil(row.length / 2);
  const comp1: string = row.slice(0, half - 1);
  const comp2: string = row.slice(half - 1).slice(0, -1);

  return [comp1, comp2];
}

function letterInBothCompartments(comp1: string, comp2: string): string {
  const one = comp1.split('');
  const two = comp2.split('');
  const intersection = one.filter(element => two.includes(element));

  return intersection[0];
}

let sum: number = 0;

input.forEach((e: string) => {
  const compartments = splitCompartments(e);
  const sameLetter = letterInBothCompartments(compartments[0], compartments[1]);
  //console.log(compartments);
  //console.log("sameLetter", sameLetter);
  const value = letterValue(sameLetter);
  sum = sum + value;
})

console.log("part 1", sum);
