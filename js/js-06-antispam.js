// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

function checkForSpam(message) {
  let result;
  if (
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale")
  ) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
