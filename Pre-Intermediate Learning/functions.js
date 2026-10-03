// function add(a,b)
// {
//     let res = a + b;
//     return res;
// }

// let added = add(2,7);

// console.log(added);

//this context
const user = {
  name: "Alice",

  greet: function() {
    // Inside greet(), 'this' correctly points to the 'user' object
    
    function innerFunc() {
      var message = "Hello " + this.name; 
      console.log(message); // "Hello undefined" 
      // 'this' broke because innerFunc() is just a regular function call!
    }

    innerFunc();
  }
};

user.greet();


const observer = (num1,num2) => num1 + num2;

console.log(observer(1,2))