//Реалізувати алгоритм бінарного пошуку

function binarySearch(arr, val) {
	let left = 0;
	let right = arr.length - 1;
	let middle = Math.floor((left + right) / 2);

	while (arr[middle] !== val && left <= right) {
		if (arr[middle] < val) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
		middle = Math.floor((left + right) / 2)
	}

	return arr[middle] === val ? middle : -1;
}

// Приклад використання функції:
const arr = [1, 3, 5, 7, 9];
console.log("task_4: ", binarySearch(arr, 5)); // поверне 2, тому що 5 знаходиться на індексі 2
console.log("task_4: ", binarySearch(arr, 2)); // поверне -1, тому що 2 не знайдено в масиві
