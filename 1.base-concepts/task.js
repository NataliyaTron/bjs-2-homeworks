"use strict"
function solveEquation(a, b, c) {
  
  let arr = [];
  let x1;
  let x2;
  
  let D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    arr = [-b/(2*a)];
  } else {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2);
  }

    return arr;
}
