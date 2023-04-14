//Написати реалізацію сортування бульбашкою масиву

function buubleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

let arr = [0, 2, 938, 4, 7262, 1, 739, 6, 8, 76, 7, 8, 6];
buubleSort(arr);

console.log(arr);
