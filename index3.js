//Задание 6.6.3
let numberArray = +prompt('Введите любое число:');
// let numberArray = Number(prompt('Введите любое число'))
let array = [];
let n = 0;
while (n < numberArray) {
	n++;
	array.push(n);
}
console.log(array);