
const btnAdd = document.querySelector('button[data-value]');
const input = document.querySelector('input[data-value]');
const output = document.querySelector('.js-outputs');


let total = 0;

btnAdd.addEventListener('click', function(){
  
  const valueInput = Number(input.value);// input всегда возвращает строку

  console.log(valueInput);
  console.log(typeof(valueInput));

  total += valueInput;
  output.textContent = total;

});