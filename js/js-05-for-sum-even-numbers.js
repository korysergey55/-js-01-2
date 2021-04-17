//  Вывод суммы всех четных чисел.

const evenNumbers = function (currentNum) {
  let screen;
  let sum = 0 ;
  for (let i = 0; i <= currentNum; i += 1) {
    if (i % 2 === 0) {
      screen = i;
      sum = sum + screen ;
    }
    console.log("четные числа -", screen);
   
  }
  console.log("Сумма всех введенных четных чисел -", sum);
  return screen;
};
evenNumbers(20);
