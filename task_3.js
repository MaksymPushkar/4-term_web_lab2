//Написати функцію, яка порахує факторіал натурального числа

let n = 5;

function factorial(n) {
	let result = 1;
	
	if (n > 0) {
		for (let i = 1; i <= n; i++) {
			result *= i;
		}
	}

	return result;
}

console.log("task_3: ", factorial(n));
