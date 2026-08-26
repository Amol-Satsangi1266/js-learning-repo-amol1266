// This file contains the major part of the learnings regarding the date and time features on JS

let date1 = new Date();

// console.log(date1);

//console.log(date1.toLocaleDateString());

console.log(date1.toLocaleString('default',
    {
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
    }
))