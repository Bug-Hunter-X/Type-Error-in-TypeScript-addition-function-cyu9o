function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number | string {
  if(isNumber(a) && isNumber(b)) {
    return add(a,b);
  } else {
    return "Error: Invalid input";
  }
}

let result1 = addSafe(1, "2"); // Returns "Error: Invalid input"
let result2 = addSafe(1,2); //Returns 3