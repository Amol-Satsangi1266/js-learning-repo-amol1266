const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Check Function")
        resolve({username:"Amol",email: "amolpankaj14@gmail.com"})
    },1000)
});

promise.then(function(user){
    console.log(user);
})

// handling both resolve and reject boys

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Again Check 1")
        let error = false;
        if(!error)
        {
        resolve({username:"Vijay",email:"vijaysir@gmail.com"})
        }
        else
        {
            reject('NOT ACCEPTABLE')
        }
        
    }, 1000)
})

promise4
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})

//Async and Await

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Again Check 1")
        let error = false;
        if(!error)
        {
        resolve({username:"Vijay",email:"vijaysir@gmail.com"})
        }
        else
        {
            reject('NOT ACCEPTABLE')
        }
        
    }, 1000)
})

async function consumepromise5(){
    try{
        const response = await promise5
        console.log(response)
    }
    catch(error)
    {
        console.log(error)
    }
}
consumepromise5()

//fetch trial

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E:", error);
})