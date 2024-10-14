//Задание 6.6.1 Палиндром
const palindrome = str => {
	//Переводим в нижний регистр
	str = str.toLowerCase().replaceAll(" ", "")
	//Переворачиваем входную строку и возвращаем результат сравнения
	return str === str.split('').reverse().join('')
}
//Проверка
const str = "сантимент"
const isPalindrome = palindrome(str)
console.log(isPalindrome) // Выведет true