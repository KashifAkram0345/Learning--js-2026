
// 11. Write a function to check if two strings are anagrams.

// * "listen", "silent" → true
let str1 = "race";
let str2 = "care";

let count = 0;

for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            count++;
            break;
        }
    }
}

if (count === str1.length) {
    console.log("Anagram");
} else {
    console.log("Not Anagram");
}























