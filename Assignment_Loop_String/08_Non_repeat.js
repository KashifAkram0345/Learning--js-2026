//   Q .8 Find the first non-repeating character in a string.
//    \\ * "aabbcdd" → "c"



let str = "aabbcdd";
let str2 = "";

for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
            count++;
        }
    }

    if (count === 1) {
        str2 = str[i];
        break;
    }
}

console.log(str2);