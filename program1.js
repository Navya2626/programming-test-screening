function calculate(a, b, operation) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return b !== 0 ? a / b : "Division by zero error";
    default:
      return "Invalid operation";
  }
}

console.log("Add:", calculate(10, 5, 'add'));         
console.log("Subtract:", calculate(10, 5, 'subtract')); 
console.log("Multiply:", calculate(10, 5, 'multiply')); 
console.log("Divide:", calculate(10, 5, 'divide')); 


