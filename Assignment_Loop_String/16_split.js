//  Q.16 Given a sentence, count how many words are there without using split().


let str = "I love JS";

let count = 1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        count++;
    }
}

console.log(count);