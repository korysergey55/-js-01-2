// Функция  принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale,и возвращает результат проверки.
// Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

const checkForSpam = function(message) {
  let result;
  if (
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale")
  ) {
    result = true;
  } else {
    result = false;
  }
  console.log('Слова в строке содержат слова SPAM или sAlE.', result);
  return result;
}

checkForSpam ('Функция  принимает строку проверяет её на содержание запрещенных слов spam и sale,и возвращает результат проверки.Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.');