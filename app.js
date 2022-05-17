const value = document.querySelector('.output'),
preValue = document.querySelector('.output-pre'),
allClear = document.querySelector('#clear'),
del = document.querySelector('#delete'),
operations = document.querySelectorAll('.btn-operation'),
numbers = document.querySelectorAll('.btn-number'),
equals = document.querySelector('#equals'),
switchs = document.querySelector('.btn-switch'),
calc = document.querySelector('.calc'),
deg = document.querySelector('#deg');

allClear.addEventListener('click',clear);

deg.addEventListener('click', () => {
  const ss = deg.querySelector('.circle')
  if(ss.textContent === "DEG" ){
    ss.textContent = "RAD"
    ss.style = "color:red;"
  }else{
    ss.textContent = "DEG"
    ss.style = "color:#fff;"
  }
});

del.addEventListener('click', ()=> {
  let str = value.value;
  if(str.slice(-1) === ')' && str.slice(-2) !== "()"){
    str = str.substring(0,str.length-2) + ")";
  }else if(str.slice(-2) === "()"){
    str = '';
  }else if(str.slice(-2) === '(' && str.slice(-1) === ')'){
    str = '';
  }else{
    str = str.substring(0,str.length - 1);
  }
  value.value = str;
});

numbers.forEach((number)=>{
  number.addEventListener('click',()=> {
    let str = value.value,
    newStr = preValue.value,
    str1;
    if(number.classList.contains('btn-complex')){
      if(number.classList.contains('braces')){
        if(newStr !== ""){
          if(newStr.slice(-1) === "+" || newStr.slice(-1) === "-" || newStr.slice(-1) === "*" || newStr.slice(-1) === "/" || newStr.slice(-1) === "%" || newStr.slice(-1) === "^"){
            if(str.slice(-1) === ")"){
              str = number.textContent + "()";
            }else{
              str += number.textContent + "()"
            }
          }else{
            Let c = parseFloat(newStr)
            switch(number.textContent(0,3)){
            case "Sin":
              result = Math.sin(c).toFixed(2)
              break;
            case "Cos":
              result = Math.cos(c).toFixed(2);
              break;
            case "Tan":
              result = Math.tan(c).toFixed(2);
              break;
            case "Log":
              result = Math.log(c).toFixed(2);
              break;
            default:
              return;
          }
          newStr = result;
          str = '';
          preValue.value = newStr;
          }
        }else {
          if(str.slice(-1) === ")"){
            str = number.textContent + "()"
          }else{
            str += number.textContent + "()";
          }
        }
      }else if(number.classList.contains('no-braces')){
        if(newStr !== ""){
          if(newStr.slice(-1) === "+" || newStr.slice(-1) === "-" || newStr.slice(-1) === "*" || newStr.slice(-1) === "/" || newStr.slice(-1) === "%" || newStr.slice(-1) === "^"){
            str += Math.PI.toFixed(4);
          }else{
            return ;
          }
        }else{
          if(str.slice(-1) === ")"){
            if(str.slice(-2) === "()"){
              str = str.substring(0,str.length-1) + Math.PI.toFixed(4) + ")";
            }else {
              str1 = str.substring(4,str.length-1) * Math.PI.toFixed(4);
              str = str.substring(0,4) + str1 + ")"
            }
          }else if (str === ''){
            str +=  Math.PI.toFixed(4);
          }else{
            str  = parseFloat(str)
            str = str  * Math.PI.toFixed(4)
          }
        }
      }else if(newStr !== ""){
        if(newStr.slice(-1) === "+" || newStr.slice(-1) === "-" || newStr.slice(-1) === "*" || newStr.slice(-1) === "/" || newStr.slice(-1) === "%" || newStr.slice(-1) === "^"){
          str += number.textContent
        }else{
          return ;
        }
      }
      }else{
      if(str.includes('.') && number.classList.contains('btn-small')){
        return ;
      }else if(str.slice(-1) ===  ")"){
        if(number.classList.contains("btn-simple")){
          str = str.substring(0,str.length-1) + number.textContent + ")";
        }
      }else{
        if(newStr === ''){
          str += number.textContent;
        }else if(newStr.slice(-1) === "+" || newStr.slice(-1) === "-" || newStr.slice(-1) === "*" || newStr.slice(-1) === "/" || newStr.slice(-1) === "%" || newStr.slice(-1) === "^"){
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
    if(str === '' && newStr === ''){
      str = '';
    }else if(newStr === '' && str !== ''){
      if(operation.textContent === "!"){
        str = parseFloat(str);
        if(str === 1 || str === 0){
          str = 1;
        }else{
          for(let x=str-1; x>=1; x--){
            str = str * x
          }
        }
      }
      else{
        if(str.slice(-1) === ")"){
          let c
          if(deg.textContent === "DEG"){
             c = parseFloat(str.substring(4,str.length-1))
          }else if(deg.textContent === "RAD"){
            if(str.substring(0,3 ==="Log")){
              c = c * (10/Math.E)
              console.log(123)
            }else{
              c = c*(Math.PI/180)
            }
          }
          switch(str.substring(0,3)){
            case "Sin":
              result = Math.sin(c).toFixed(2)
              break;
            case "Cos":
              result = Math.cos(c).toFixed(2);
              break;
            case "Tan":
              result = Math.tan(c).toFixed(2);
              break;
            case "Log":
              result = Math.log(c).toFixed(2);
              break;
            default:
              return;
          }
          str = result;
          str +=operation.textContent;
        }else{
          str +=operation.textContent;
        }
      }
      newStr = str;
      value.value = '';
    }else if(newStr !== '' && str ===''){
      if(newStr.slice(-1) === "+" || newStr.slice(-1) === "-" || newStr.slice(-1) === "*" || newStr.slice(-1) === "/" || newStr.slice(-1) === "%" || newStr.slice(-1) === '^'){
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
          case "^":
            newStr = newStr.substring(0,newStr.length-1) + operation.textContent;
          default:
            return;
            }
      }else if(operation.textContent === "!"){
        newStr = parseFloat(newStr);
        if(newStr === 1 || newStr === 0){
          newStr = 1;
        }else{
          for(let x=newStr-1; x>=1; x--){
            newStr = newStr * x
          }
        }
      }
      else{
        newStr +=operation.textContent;
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
          case "^":
            result = Math.pow(a,b);
            break;
          case ")":
          default:
            return;
        }
      }
      newStr = result + ' ' + operation.textContent;
      value.value = '';
   }

   if(newStr == undefined){
     return ;
   }else{
    preValue.value = newStr;
   }
  })
})

equals.addEventListener('click', calculate);

switchs.addEventListener('click', () => {
  switchs.classList.toggle('red');
  switchs.querySelectorAll('i').forEach(icon =>icon.classList.toggle('rotate'))
  numbers.forEach(number => number.classList.toggle('btn-show'));
  operations.forEach(operation => operation.classList.toggle('btn-show'));
  if(calc.classList.contains('spin')){
    calc.classList.remove('spin');
    calc.classList.add('non-spin');
  }else{
    calc.classList.remove('non-spin');
    calc.classList.add('spin');
  }
});

function calculate(){
  let str = value.value,
  newStr = preValue.value,
  result,
  a =  parseFloat(newStr.substring(0,newStr.length-1)),
  b = parseFloat(str);
  if(str !== '' && str.slice(-1) === ")"){
    let c = parseFloat(str.substring(4,str.length-1))
    if(deg.textContent === "DEG"){
       c = c;
    }else if(deg.textContent === "RAD"){
      if(str.substring(0,3 ==="Log")){
        c = c
      }else{
        c = c*(Math.PI/180)
      }
    }
    if(newStr === ''){
      switch(str.substring(0,3)){
        case "Sin":
          result = Math.sin(c).toFixed(2)
          break;
        case "Cos":
          result = Math.cos(c).toFixed(2);
          break;
        case "Tan":
          result = Math.tan(c).toFixed(2);
          break;
        case "Log":
          result = Math.log(c).toFixed(2);
          break;
        default:
          return;
      } 
    }
  }else if(str !== '' && newStr !== ''){
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
      case "^":
        result = Math.pow(a,b);
        break;
        default:
          return;
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
