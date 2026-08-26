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


// Features

//spreading
let marvel = ["spiderman","Dr. Strang", "Ghost Rider"]
let dc = ["Red Hood","Constantine","John Stwart"]
const heroes = [...marvel,...dc];

console.log(heroes);


//Flatnening

const real_arr = [1,2,3,4,[5,6],7,[8,[9,10,[11,12]]]];

const main_arr = real_arr.flat(Infinity);

console.log(main_arr);


