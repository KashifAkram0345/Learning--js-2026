// Q. 15. Create a simple password validator:

// * At least 8 characters
// * Must contain a number
// * Must contain a letter
let str = "abc12345";

let str1 = "null";
let str2 = "null";

for (let i = 0; i < str.length; i++) {

    if (str[i] >= "0" && str[i] <= "9") {
        str2 = true;
    }

    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
        str2= true;
    }

}

if (str.length >= 8 && str1 && str2) {
    console.log("tis is a correct password");
} else {
    console.log("not correct password");
}