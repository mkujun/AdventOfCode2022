import { readFileSync } from 'fs';
//const input: string[] = readFileSync('../inputs/test.txt', 'utf-8').split('\n').slice(0, -1);
const input: string[] = readFileSync('../inputs/08.txt', 'utf-8').split('\n').slice(0, -1);

let columns:number = 0;
let rows:number = input[0].length - 1;
let grid: number[][] = [];

function buildGrid(): void {
  for(let i:number = 0; i < input.length; i++) {
    columns++;
    let row: number[] = input[i].split('').map(Number).slice(0, -1);
    grid.push(row);
  }
}

function traverseGrid(): void {
  for(let i: number = 1; i < rows - 1; i++) {
    for(let j: number = 1; j < columns - 1; j++) {
      checkInsideGrid(i, j);
    }
  }
}

function visibleLeft(i: number, j: number): boolean {
  let isVisible: boolean = true;

  for(let cC: number = 0; cC < j; cC++) {
    if (grid[i][cC] < grid[i][j]) {
      continue;
    }
    else {
      isVisible = false;
      break;
    }
  }

  return isVisible;
}

function visibleRight(i: number, j: number): boolean {
  let isVisible: boolean = true;

  for(let cC: number = j + 1; cC < rows; cC++) {
    if (grid[i][cC] < grid[i][j]) {
      continue;
    }
    else {
      isVisible = false;
      break;
    }
  }

  return isVisible;
}

function visibleTop(i: number, j: number): boolean {
  let isVisible: boolean = true;

  for(let rC:number = 0; rC < i; rC++) {
    if (grid[rC][j] < grid[i][j]) {
      continue;
    }
    else {
      isVisible = false;
      break;
    }
  }

  return isVisible;
}

function visibleBottom(i: number, j: number): boolean {
  let isVisible: boolean = true;

  for(let rC:number = i + 1; rC < rows; rC++) {
    if (grid[rC][j] < grid[i][j]) {
      continue;
    }
    else {
      isVisible = false;
      break;
    }
  }

  return isVisible;
}

function checkInsideGrid(i: number, j: number): void {
  let vLeft = visibleLeft(i, j);
  let vRight = visibleRight(i, j);
  let vTop = visibleTop(i, j);
  let vBottom = visibleBottom(i, j);

  if (vLeft || vRight || vTop || vBottom) {
    visible++;
  }
}


buildGrid();
let visible: number = rows * 2 + columns * 2 - 4; // visible from outside the grid
traverseGrid();
console.log("part 1", visible);

