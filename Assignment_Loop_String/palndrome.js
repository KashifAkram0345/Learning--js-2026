let str = 'racecar';
let str2 = str.length - 1;
let msg = 'It is a palindrome';



for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
        msg = 'It is not a palindrome';
        break;
    }
}

console.log(msg);