//Задание 6.6.5
const obj = {
	some: 'some',
	dom: 'text',
	arr: [1, 2, 3, 4, 5],
	tom: 'there'
}
const resultArray = []
for (const i in obj) {
	if (Array.isArray(obj[i])) {
		for (let j = 0; j < obj[i].length; j++) {
			resultArray.push(obj[i][j])
		}
	} else {
		resultArray.push(obj[i])
	}
}

console.log(resultArray)