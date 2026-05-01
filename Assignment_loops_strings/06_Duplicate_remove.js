let str1 = 'aabbccdd';
let str2 = '';

for (let i = 0; i < str1.length; i++) {
    let j;
    for (j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) 
            break;
    }

    if (j === str2.length) {
        str2 += str1[i];
    }
}

console.log(str2);
