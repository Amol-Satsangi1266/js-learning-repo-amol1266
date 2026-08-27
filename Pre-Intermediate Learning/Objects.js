const UserDetails = 
{
    name: "Amol Satsangi",
    age: 20,
    Profession: "Softare Engineer"
}

console.log(UserDetails.name); // Single Object Handling

//best practice ->
console.log(UserDetails["name"]);
console.log(UserDetails);  // Handling the full object

Object.freeze(UserDetails); // To freeze the changing in object.

UserDetails.getname = function()
{
    console.log(this.name);
}

console.log(UserDetails.getname());


