//Написати функцію, яка знайде максимальну дату у масиві

function getMaxDate(arr) {
  let maxDate = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxDate) {
      maxDate = arr[i];
    }
  }

  return maxDate;
}

const dates = [
  new Date('2021-01-01'),
  new Date('2022-12-31'),
  new Date('2022-03-15'),
  new Date('2018-02-01')
];

console.log(getMaxDate(dates));
