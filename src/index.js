module.exports = function toReadable (number) {
    let readableNumber = '';
    let numArr = number.toString().split('');
    numArr.forEach(element => parseInt(element, 10));
    console.log(numArr);
    let numInWordArr = [['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '],
                        ['', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '],
                        ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']];
    if (number === 0) {
      readableNumber = 'zero';
    } else if (number < 20) {
      readableNumber = numInWordArr[2][number];
    } else if (number > 19 && number < 100) {
      readableNumber = numInWordArr[1][numArr[0] - 1] + numInWordArr[2][numArr[1]];
    } else if (number > 99) {
      readableNumber = numInWordArr[0][numArr[0]] + 'hundred ';
      if ((number % 100) < 20) {
      readableNumber = readableNumber + numInWordArr[2][number % 100];
      } else if ((number % 100) > 19 && (number % 100) < 100) {
        readableNumber = readableNumber + numInWordArr[1][numArr[1] - 1] + numInWordArr[2][numArr[2]];
      }
    }

    return readableNumber.trim();
}
