
const from = document.querySelector('.from')
const test = document.querySelector('.test')
const case1 = test.querySelector('.case1')
const case2 = test.querySelector('.case2')
const case3 = test.querySelector('.case3')
const case4 = test.querySelector('.case4')
const regLetter = /[A-ZА-ЯЁ]/g
const regNumber = /\d/g
const regSymbol = /[.,:;()]/g
const regAmount = /.{8}/g

from.addEventListener('input', function (event) {
  const input = this.value
  function validate (argument,reg){
    input.match(reg)?argument.style.color = "red":argument.style.color = "black"
  }
  validate (case1,regLetter)
  validate (case2,regNumber)
  validate (case3,regSymbol)
  validate (case4,regAmount)

})
