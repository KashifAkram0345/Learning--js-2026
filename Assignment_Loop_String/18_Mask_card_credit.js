// 18.Q Mask a credit card number:

// * "1234567812345678" → "******5678"




let str = "1234567812345678";
let str2 = "";

for (let i = 0; i < str.length; i++) {
    if (i < str.length - 4) {
        str2=str2+ "*";
    } else {
        str2=str2+ str[i];
    }
}

console.log(str2);