const value = document.querySelector('#value'),
preValue = document.querySelector('#value-pre'),
clear = document.querySelector('#clear'),
del = document.querySelector('#delete'),
percent = document.querySelector('#percent'),
plus = document.querySelector('#plus'),
minus = document.querySelector('#minus'),
multiply = document.querySelector('#multiply'),
equals = document.querySelector('#equals'),
divide = document.querySelector('#divide'),
zero = document.querySelector('#zero'),
one = document.querySelector('#one'),
two = document.querySelector('#two'),
three = document.querySelector('#three'),
four = document.querySelector('#four'),
five = document.querySelector('#five'),
six = document.querySelector('#six'),
seven = document.querySelector('#seven'),
eight = document.querySelector('#eight'),
nine = document.querySelector('#nine'),
period = document.querySelector('#period');

window.addEventListener('DOMContentLoaded', ()=>{
  value.setAttribute("placeholder","Calculator")
})
clear.addEventListener('click', clearAll)
one.addEventListener('click', ()=>{value.value += one.textContent})
two.addEventListener('click', ()=>{value.value += 2})
three.addEventListener('click', ()=>{value.value += 3})
four.addEventListener('click', ()=>{value.value += 4})
five.addEventListener('click', ()=>{value.value += 5})
six.addEventListener('click', ()=>{value.value += 6})
seven.addEventListener('click', ()=>{value.value += 7})
eight.addEventListener('click', ()=>{value.value += 8})
nine.addEventListener('click', ()=>{value.value += 9})
zero.addEventListener('click', ()=>{value.value += 0})
plus.addEventListener('click', ()=>{
  const str = preValue.value;
  str = value.value;
  if(str.substring(str.length - 1) != '+'){
    str += '+';
  }else{
    str +='';
  }
  operatorFunction();
})
minus.addEventListener('click', ()=>{value.value += '-'})
divide.addEventListener('click', ()=>{value.value += '/'})
multiply.addEventListener('click', ()=>{value.value += '*'})

period.addEventListener('click', ()=> {
  if(value.value.includes('.')){
    value.value += '';
  }else{
    value.value +='.';
  }
})

del.addEventListener('click',()=>{
  let str = value.value;
  str = str.substring(0, str.length - 1)
  value.value = str;
})

equals.addEventListener('click',()=>{
  let data = value.value;
  if(data!== ''){
    for(let x = 0;x<=data.length; x++){
      let output = Number(data.substring(x));
      console.log(output);
    }
    // data += output;
  }
  value.value = data
})

function operatorFunction(){
  value.value = '';
  value.setAttribute("placeholder","")
}

function clearAll(){
  value.value = ''
  preValue.value = ''
}
