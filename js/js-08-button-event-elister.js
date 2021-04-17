
const btnAdd = document.querySelector('button[data-value]');
const input = document.querySelector('input[data-value]');

let total = 0;

btnAdd.addEventListener('click', function(){
  
  console.log(input.value);

  const valueInput = Number(input.value);
  
  console.log(valueInput);
  console.log(typeof(valueInput));

  total += valueInput;
  console.log(total);
});