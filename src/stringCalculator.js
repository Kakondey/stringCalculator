function add(numbers) {
  if (!numbers) return 0;
  const numbersArray = numbers.split(',');

  return numbersArray.reduce((acc, num) => acc + parseInt(num), 0);
}

module.exports = { add };
