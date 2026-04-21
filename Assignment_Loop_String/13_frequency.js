let str1 = "aabbbcc";

let str2 = "";
let str3 = 0;    

for (let i = 0; i < str1.length; i++) {
    let count = 0;

    for (let j = 0; j < str1.length; j++) {
        if (str1[i] === str1[j]) {
            count++;
        }
    }

    if (count > str3) {
        str3 = count;
        str2 = str1[i];
    }
}

console.log(str2);
