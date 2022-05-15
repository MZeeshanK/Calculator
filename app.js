const value = document.querySelector('.output'),
preValue = document.querySelector('.output-pre'),
allClear = document.querySelector('#clear'),
del = document.querySelector('#delete'),
operations = document.querySelectorAll('.btn-operation'),
numbers = document.querySelectorAll('.btn-number'),
equals = document.querySelector('#equals'),
switchs = document.querySelector('.btn-switch'),
calc = document.querySelector('.calc');

allClear.addEventListener('click',clear);

del.addEventListener('click', ()=> {
  let str = value.value;
  str = str.substring(0,str.length - 1);
  value.value = str;
});

numbers.forEach((number)=>{
  number.addEventListener('click',()=> {
    let str = value.value,
    newStr = preValue.value;
    if(number.classList.contains('btn-complex')){
      str = number.textContent + '()';
    }else{
      if(str.includes('.') && number.classList.contains('btn-small')){
        return ;
      }else{
        if(newStr === ''){
          str += number.textContent;
        }else if(newStr.slice(-1) === "+" || newStr.slice(-1) === "-" || newStr.slice(-1) === "*" || newStr.slice(-1) === "/" || newStr.slice(-1) === "%"){
          str += number.textContent;
        }else{
          return ;
        }
      }
    }
    value.value = str;
  })
})

operations.forEach((operation) => {
  operation.addEventListener('click',()=>{
    let str = value.value,
    newStr = preValue.value;
    if(operation.classList.contains('btn-complex')){
      return;
    }
    if(str === '' && newStr === ''){
      str = '';
    }else if(newStr ==='' && str !== ''){ 
      str += ' ' + operation.textContent;
      newStr = str;
      value.value = '';
    }else if(newStr !== '' && str ===''){
      if(newStr.slice(-1) === "+" || newStr.slice(-1) === "-" || newStr.slice(-1) === "*" || newStr.slice(-1) === "/" || newStr.slice(-1) === "%"){
        switch(newStr.slice(-1)){
          case "+":
            newStr = newStr.substring(0,newStr.length-1) + operation.textContent;
            break;
          case "-":
            newStr = newStr.substring(0,newStr.length-1) + operation.textContent;
            break;
          case "*":
            newStr = newStr.substring(0,newStr.length-1) + operation.textContent;
            break;
          case "/":
            newStr = newStr.substring(0,newStr.length-1) + operation.textContent;
            break;
          case "%":
            newStr = newStr.substring(0,newStr.length-1) + operation.textContent;
            break;
          default:
            return;
            }
      }else{
        newStr += " " + operation.textContent;
      }
    }else{
      let a =  parseFloat(newStr.substring(0,newStr.length-1)),
      b = parseFloat(str),
      result;
      if(str !== '' && newStr !== ''){
        switch(newStr.slice(-1)){
          case "+":
            result = a+b;
            break;
          case "-":
            result = a-b;
            break;
          case "*":
            result = a*b;
            break;
          case "/":
            result = a/b;
            break;
          case "%":
            result = (a/b) *100;
            break;
        }
      }
      newStr = result + ' ' + operation.textContent;
      value.value = '';
   }
   preValue.value = newStr;
  })
})

equals.addEventListener('click', calculate);

switchs.addEventListener('click', () => {
  numbers.forEach(number => number.classList.toggle('btn-show'));
  operations.forEach(operation => operation.classList.toggle('btn-show'));
  if(calc.classList.contains('spin')){
    calc.classList.remove('spin');
    calc.classList.add('non-spin');
  }else{
    calc.classList.remove('non-spin');
    calc.classList.add('spin');
  }
})

function calculate(){
  let str = value.value,
  newStr = preValue.value,
  a =  parseFloat(newStr.substring(0,newStr.length-1)),
  b = parseFloat(str),
  result;
  if(str !== '' && newStr !== ''){
    switch(newStr.slice(-1)){
      case "+":
        result = a+b;
        break;
        case "-":
        result = a-b;
        break;
        case "*":
        result = a*b;
        break;
        case "/":
        result = a/b;
        break;
        case "%":
        result = (a/b) *100;
        break;
    }
  }
  if(result == undefined){
    return ; 
  }else{
    value.value = '';
    preValue.value = result;
  }
}

function clear(){
  value.value = '';
  preValue.value = '';
}
