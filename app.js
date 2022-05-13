const value = document.querySelector('#value'),
preValue = document.querySelector('#value-pre'),
allClear = document.querySelector('#clear'),
del = document.querySelector('#delete'),
operations = document.querySelectorAll('.btn-operation'),
numbers = document.querySelectorAll('.btn-number'),
equals = document.querySelector('#equals');


allClear.addEventListener('click',clear);

del.addEventListener('click', ()=> {
  let str = value.value;
  str = str.substring(0,str.length - 1);
  value.value = str;
});

numbers.forEach((number)=>{
  number.addEventListener('click',()=> {
    let str = value.value;
    if(number.classList.contains('btn-small') && str.includes('.')){
      str +='';
    }
    else{
      str += number.textContent;
    }
    value.value = str;
    operations.forEach((operation)=>{
      if(str.includes(operation.textContent)){
       str = str.substring(0,str.indexOf(operation.textContent))
       preValue.value = str;
      }
    })
  })
})

operations.forEach((operation) => {
  operation.addEventListener('click',()=>{
    let str = value.value;
    if(str === ''){
      str = '';
    }else if(str.slice(-1) === '+' || str.slice(-1) === '-' || str.slice(-1) === '*' || str.slice(-1) === '/' || str.slice(-1) === '%'){
        switch(operation.textContent){
          case '+':
            str = str.substring(0,str.length -1) + '+';
            break;
          case '-':
            str = str.substring(0,str.length -1) + '-';
            break;
          case '*':
            str = str.substring(0,str.length -1) + '*';
            break;
          case '/':
            str = str.substring(0,str.length -1) + '/';
            break;
          case '%':
            str = str.substring(0,str.length -1) + '%';
            break;
          default:
            return;
      }
    }
    else{
      str += operation.textContent;
    }
    value.value = str;
  })
})

equals.addEventListener('click',calculate)

function calculate(){
  let cal,
  str= value.value;
  let i = [];
  operations.forEach((operation) => {
    for(x=0;x<str.length;x++){
      if(str[x]===operation.textContent){
        i.push(x);
      }
    }
  })
  const y = i[i.length-1],
  z = i[0];
  let a;
  let b;
  b = parseFloat(str.substring(y+1,str.length));
  a = parseFloat(str.substring(0,z));

  switch(str[z] || str[y]){
    case '+':
      cal = a+b;
      break;
    case '-':
      cal = a-b;
      break;
    case '*':
      cal = a*b;
      break;
    case '/':
      cal = a/b;
      break;
    case '%':
      cal = (a/b)*100;
      break;
    default:
      return;
  }

  preValue.value = cal;

  if(i.length>1){
    a = parseFloat(str.preValue);
    preValue.value = cal;
  }
}



function clear(){
  value.value = '';
  preValue.value = '';
}
