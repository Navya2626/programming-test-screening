function printOddSeries(n) {
  const result = [];
  for (let i = 0; i < n; i++) result.push(2 * i + 1);
  console.log(result.join(', '));
}

printOddSeries(4); 
