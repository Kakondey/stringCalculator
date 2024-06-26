function add(numbers) {
  // Handle empty string
  if (!numbers.trim()) return 0;

  const delimiterRegex = /^\/\/([^\n]+)/;
  const match = numbers.match(delimiterRegex);
  if (match) {
    const delimiter = match[1]; // Extract the custom delimiter

    const numbersStr = numbers.substring(numbers.indexOf('\n') + 1);

    return add(
      numbersStr.replace(new RegExp(`${delimiter}`, 'g'), ',')
    );
  }

  const numbersArray = numbers.split(/[\s,]+/);

  return numbersArray.reduce((acc, num) => {
    const parsedNum = parseFloat(num);
    if (!isNaN(parsedNum)) {
      if (parsedNum < 0) {
        const cleanedInput = numbers
          .replace(/(\d+-?)(?!\d)/g, '$1 ')
          .replace(/[^0-9-. ]/g, '')
          .trim();
        throw new Error(
          `negative numbers not allowed ${cleanedInput}`
        );
      }
      return acc + parsedNum;
    }
    return acc;
  }, 0);
}

module.exports = { add };
