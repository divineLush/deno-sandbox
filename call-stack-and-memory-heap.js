// MEMORY HEAP
const number = 610 // allocate memory for number in memory heap
const string = 'some text'
const person = { // allocate memory for an object and it's values
  firstName: 'John',
  lastName: 'Doe'
}
// memory heap is a large region in memory that the JS engine provides for us
// data is stored in unordered fashion


// CALL STACK
function substract(num) {
  return num - 2
}

function calculate() {
  const sumTotal = 4 + 5
  return substract(sumTotal)
}

calculate()
// call stack is a region in memory that operates in first-in-last-out mode
