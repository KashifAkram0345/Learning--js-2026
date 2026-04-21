// Q.14 Remove all numbers from a string.

// * "abc123def" → "abcdef"


let str1 = "abc123def";
let str2=str1.replace(/[0-9]/g,"")
console.log(str2);

