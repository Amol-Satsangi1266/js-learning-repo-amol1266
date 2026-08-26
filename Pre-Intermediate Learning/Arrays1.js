let oneArr = ["Amol", "Dinesh","Raju"];

oneArr.push("raja hindustani") // pushing a value

console.log(oneArr);

console.log(oneArr[1]); // index printing

oneArr.unshift("Names start here->")


//Advanced methods: 
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(num => num * 2);      // [2, 4, 6, 8]
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10