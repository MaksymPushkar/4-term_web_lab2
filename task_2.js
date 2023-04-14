//Написати функцію, яка поверне знайде чи входить шукана стрічка у задану

let str = "I am ukrainian";
let searchStr = "ukr";

function isIn(str, searchStr) {
	let j = 0;
	let isSearchStrInStr = false;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === searchStr[j]) {
			j++;
			if (j === searchStr.length) {
				isSearchStrInStr = true;
				break;
			}
		} else { j = 0; }
	}

	return isSearchStrInStr;
}

console.log("task_2: ", isIn(str, searchStr));
