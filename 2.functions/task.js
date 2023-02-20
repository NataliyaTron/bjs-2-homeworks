function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for(let i = 1; i < arr.length; i++) {
    
    if (arr[i] > max) {
      max = arr[i]; 
    }

    else if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  let avg = (sum / arr.length).toFixed(2);
  avg = Number(avg);

  return { min:min, max:max, avg:avg };
}

getArrayParams(-99, 99, 10);

// 2-ой способ
/*function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];

  for(let i = 1; i < arr.length; i++) {
    max = Math.max(arr[i], max);
    min = Math.min(arr[i], min);
  }
  
  let sum = arr.reduce((acc, next) => acc + next, 0);
  
  let avg = (sum / arr.length).toFixed(2);
  avg = Number(avg);

  return { min:min, max:max, avg:avg };
}

getArrayParams(-99, 99, 10);*/

//Задача 2.1

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
  let sum = arr.reduce((acc, next) => acc + next, 0);
  return sum;
  console.log(sum);
  }
}

summElementsWorker(10, 10, 11, 20, 10);

//Задача 2.2

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  
  if (arr.length == 0) {
    return 0;
  }
    
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] > max) {
      max = arr[i]; 
    }

    else if (arr[i] < min) {
      min = arr[i];
    }
  }

  let difference = max - min;
  return difference;
  console.log(difference);
}

differenceMaxMinWorker(10, 10, 11, 20, 10);

//Задача 2.3

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = arr[0];
  let sumOddElement = arr[0];

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else sumOddElement += arr[i];
  }
  let difference = Math.abs(sumEvenElement - sumOddElement);
  return difference;
  console.log(difference);
}

differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17);

//Задача 2.4

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length == 0) {
    return 0;
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
      } 
  }

  if (countEvenElement == 0) {
    return 0;
  }

  let avg = sumEvenElement / countEvenElement;
  
  return avg;
  console.log(avg);
}

averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);

//Задача 3

function makeSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  arrOfArr = [...arr];
  func = [summElementsWorker, differenceMaxMinWorker, differenceEvenOddWorker, averageEvenElementsWorker];
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const sum = func(arrOfArr[i]);
  }

  if (sum > maxWorkerResult) {
    maxWorkerResult = sum;
  }
  return maxWorkerResult;
}

makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]], summElementsWorker());
  
