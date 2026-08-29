// Object Chaining

const obj = 
{
    name: 
    {
        firstName: "Amol",
        lastName: "Satsangi"
    },

    email:
    {
        workMail: "amolpankaj14@gmail.com",
        homeMail: "amolsatsangi05@gmail.com"
    },

    phone:
    {
        workphone: 0o0,
        homephone: 0o0
    },

    owner: "Amol Satsangi"

}

console.log(obj.name.firstName);
console.log(obj.email.workMail);
console.log(obj.phone.workphone);
console.log(obj.name.lastName);


// Some more

console.log(Object.keys(obj));

console.log(Object.entries(obj));

console.log(Object.values(obj));

console.log(obj.hasOwnProperty('name'));

//Object Destructuring

const {owner: o} = obj;

console.log(o);

let obj1 = 
{
    name: "Hello",
    age: 0o0,
    email: "NaN"
}





