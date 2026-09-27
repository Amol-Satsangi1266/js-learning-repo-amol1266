//for of 

const user = ["A", "B", "C"]

for(const use of user)
{
    console.log(use);
}

user.forEach(use=>
{
    console.log(use);
})

const num = [1,2,3,4];

const doubl =  num.map(num=>num*2);

console.log(doubl);

const users = [
    { name: "A", age: 20 },
    { name: "B", age: 25 }
];

const use = users.find(user => user.age === 25);
