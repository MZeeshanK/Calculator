const value = document.querySelector('#value'),
preValue = document.querySelector('#value-pre'),
allClear = document.querySelector('#clear'),
del = document.querySelector('#delete'),
operations = document.querySelectorAll('.btn-operation'),
numbers = document.querySelectorAll('.btn-number'),
equals = document.querySelector('#equals');

allClear.addEventListener('click',clear)

numbers.forEach((number)=>{
  number.addEventListener('click',()=> {
    if(number.classList.contains('btn-small') && value.value.includes('.')){
      value.value +='';
    }else{
      value.value += number.textContent
    }
  })
})

operations.forEach((operation)=>{
  operation.addEventListener('click',()=>{
    value.value += operation.textContent;
    preValue.value = value.value;
    value.value='';
    calculate();
  })
})

equals.addEventListener('click',calculate)

function calculate(){
  let cal;
  const a = parseFloat(preValue.value),
  b = parseFloat(value.value);
  if(isNaN(a) || isNaN(b)){
    return ;
  }
  switch(preValue.value.substring(preValue.value.length-1))
  {
    case '+':
      cal = a + b;
      break;
    case '-':
      cal = a - b;
      break;
    case '*':
      cal = a * b;
      break;
    case '/':
      cal = a / b;
      break;
    case '%':
      cal = (a/b)*100;
      break;
    default:
      return ;
    }
  value.value = cal;
}

function clear(){
  value.value = '';
  preValue.value = '';
}