"use strict"
function solveEquation(a, b, c) {
  
  let arr = [];
  let x1;
  let x2;
  
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b/(2*a)];
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  //Преобразование типов к числу
    percent = parseInt(percent);// процентная ставка
    contribution = parseInt(contribution);//сумма перв.взноса
    amount = parseInt(amount);//сумма кредита
    countMonths = parseInt(countMonths);//срок кредита в мес.
  
    if ((percent < 0 || contribution < 0 || amount < 0 || countMonths < 0) || (isNaN(percent) === true || isNaN(contribution) === true || isNaN(amount) === true || isNaN(countMonths) === true)) {
      return false;
    } 

    let S = amount - contribution; //тело кредита
    let P = percent/(12*100);// преобр. год.ставки в мес.
    let n = countMonths;
  //ежемесячный платеж
    let monthlyPayment = S * (P + (P / ((1 + P)**n - 1)));
  //общая сумма  
    let totalPayment = (monthlyPayment * n).toFixed(2);
    
    console.log(Number('totalPayment'));
  
    return +totalPayment;
  }