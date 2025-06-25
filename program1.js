class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  operate(operation) {
    switch (operation) {
      case 'add': return this.a + this.b;
      case 'subtract': return this.a - this.b;
      case 'multiply': return this.a * this.b;
      case 'divide': return this.b !== 0 ? this.a / this.b : "Division by zero error";
      default: return "Invalid operation";
    }
  }
}

const calc = new Calculator(10, 5);
console.log("Add:", calc.operate("add"));
console.log("Subtract:", calc.operate("subtract"));
console.log("Multiply:", calc.operate("multiply"));
console.log("Divide:", calc.operate("divide"));
