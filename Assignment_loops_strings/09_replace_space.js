let str1 = 'Kashif Akram';
let str2 = "";

for (let i = 0; i < str1.length; i++) {
    if (str1[i] === " ") {
        str2 ="Kashif";
    } else {
        str2 =str2+str1[i];
    }
}

console.log(str2);