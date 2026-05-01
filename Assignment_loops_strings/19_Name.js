let str = "shahzad saddique";

let str2 = str.split(" ");

let result =str2[0][0].toUpperCase() + ". " + 
             str2[1][0].toUpperCase() + str2[1].slice(1);

console.log(result);