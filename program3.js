function printOddSeries(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result.push(2 * Math.floor(i / 2) + 1);
    }
  }
  console.log(result.join(', '));
}

printOddSeries(4);
