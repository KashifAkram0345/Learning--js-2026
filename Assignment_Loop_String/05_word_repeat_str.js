/* Q.5 Count how many times a specific character appears in a string.
    * Input: "banana", "a" → 3*/



let str='banana';
let str2='a';
let count=0
for(let i=0;i<str.length;i++){
    if(str[i]===str2){
        count++;
    }
    
}
console.log(count)