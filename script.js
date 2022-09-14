const clear = document.getElementsByClassName("clear-all");
const display = document.querySelector(".display-field");
const num1 = document.querySelector(".one").dataset.one;
const num2 = document.querySelector(".two").dataset.two;
const num3 = document.querySelector(".three").dataset.three;
const num4 = document.querySelector(".four").dataset.four;
const num5 = document.querySelector(".five").dataset.five;
const num6 = document.querySelector(".six").dataset.six;
const num7 = document.querySelector(".sev").dataset.sev;
const num8 = document.querySelector(".eight").dataset.eight;
const num9 = document.querySelector(".nine").dataset.nine;
const num = document.querySelector(".zero").dataset.zero;
const numbers = document.querySelector("#num");


const add = (a, b) =>{ if (a - b === 0) {return a+b} return (a+b).toFixed(7)};
const minus = (a, b) => (a - b).toFixed(7);
const divide = (a, b) => (a / b).toFixed(7);
const multiply = (a, b) => (a * b).toFixed(7);

const operate = (a, b, operand) => {
  if (operand === '+') {
    return add(a, b);
  } 
  if (operand === '-') {
    return minus(a, b);
  }
  if (operand === '/') {
    if (b === 0) {
      return 'Nooo!!'
    }
      return divide(a, b);
  }
  if (operand === '*') {
    return multiply(a, b);
  }

}

display.innerHTML = operate(12, 12.35, '+')

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
  add();
});

const substractBtn = document.querySelector('.minus');
substractBtn.addEventListener('click', () => {
  minus();
})

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => {
  divide();
})

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => {
  multiply();
})
