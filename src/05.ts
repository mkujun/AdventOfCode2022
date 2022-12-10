import { readFileSync } from 'fs';
const input: string[] = readFileSync('../inputs/test.txt', 'utf-8').split('\n').slice(0, -1);
//const input: string[] = readFileSync('../inputs/05.txt', 'utf-8').split('\n').slice(0, -1);

interface Stack {
  ind: number,
  val: string[]
}

let stacks: Stack[] = [];

function containsUppercase(str: string): boolean {
  return /^[A-Z]+$/.test(str);
}

function createStacks(): void {
  const numberOfStack: number = input[0].length / 4;

  for(let i:number = 1; i <= numberOfStack; i++) {
    let s: Stack = {
      ind: i,
      val: []
    }

    stacks.push(s);
  }
}

function parseStartingCrates(e: string): void {
  //console.log(e);
  let stackNo: number = 0;
  for(let i:number = 1; i <= e.length; i = i + 4) {
    if (containsUppercase(e[i])) {
      stacks[stackNo].val.push(e[i]);
      stackNo++;
    }
    else {
      stackNo++;
    }
  }
}

function parseMoves(e: string): void {
  console.log(e);
}

createStacks();
console.log(stacks);

input.forEach((e: string) => {
  if (!e.startsWith('move', 0)) {
    parseStartingCrates(e);
  }
  else {
    parseMoves(e);
  }
})

console.log(stacks);
