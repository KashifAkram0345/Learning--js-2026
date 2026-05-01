// 8. Find the first non-repeating character in a string.
//     * "aabbcdd" → "c"
let str = 'aabbcdd';
let str2 = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'c') {
        str2 =str2+ str[i];
    }
}

console.log(str2);