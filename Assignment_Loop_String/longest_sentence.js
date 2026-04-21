

let str = "I Love Programming";
let str2 = str.split(" ");

let longest = "null";

for (let i = 0; i < str2.length; i++) {
    if (str2[i].length > longest.length) {
        longest = str2[i];
    }
}

console.log(longest);