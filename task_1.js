//Реалізувати розбиття стрічки на слова у масив. Допустим є написання функцій

let str = "I am ukrainian";

function split(str) {
	let tempArr = [];
	let tempStr = "";

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== ' ') {
			tempStr += str[i];
		} else {
			tempArr.push(tempStr);
			tempStr = "";
		}
	}
	tempArr.push(tempStr);
	tempStr = "";

	return tempArr;
}

console.log("task_1: ", split(str));
