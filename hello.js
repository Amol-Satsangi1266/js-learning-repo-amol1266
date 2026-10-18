const stringVar = "Hello";
const numVar = 42;
const boolVar = true;
const nullVar = null;
let undefVar;
const objVar = { name: "Alice", age: 25 };
const arrVar = 0;

let count = 10;
count += 5;

const sum = 10 + 5;
const isEqual = 10 === "10";
const isStrictEqual = 10 === 10;
const logicalAnd = true && false;
const logicalOr = true || false;

if (count > 15) {
  console.log("Greater");
} else if (count === 15) {
  console.log("Equal");
} else {
  console.log("Lesser");
}

const accessAllowed = count >= 18 ? "Yes" : "No";

for (let i = 0; i < 3; i++) {
  console.log(i);
}

let w = 0;
while (w < 3) {
  console.log(w);
  w++;
}

function greet(name) {
  return `Hello, ${name}!`;
}

const add = (a, b) => a + b;

console.log(greet("Bob"));
console.log(add(5, 10));

const user = {
  username: "js_dev",
  login() {
    console.log(`${this.username} logged in.`);
  }
};
user.login();

const { username } = user;
const [firstItem, secondItem] = arrVar;

const combinedArray = [...arrVar, 4, 5];
const extendedObj = { ...user, location: "Earth" };

const numbers;
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const total = numbers.reduce((acc, curr) => acc + curr, 0);

numbers.forEach(num => console.log(num));

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
}
const personInstance = new Person("Charlie");
personInstance.sayHi();

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchAndLog() {
  try {
    await delay(1000);
    console.log("Async operation complete");
  } catch (error) {
    console.error(error);
  }
}
fetchAndLog();
