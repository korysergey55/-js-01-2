// Являиться ли число четным?

const enterEvenNumber = function (userNumber) {
  let isEven;
  if (userNumber % 2 === 0) {
    isEven = true;
  }else{
    isEven = false;
  }
  console.log("Являиться ли число четным? -", isEven);
  return isEven;
};

enterEvenNumber(4);
enterEvenNumber(5);
enterEvenNumber(5377);
