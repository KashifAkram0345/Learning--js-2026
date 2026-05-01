let name = "Shahzad Saddique";

let username = "";

for (let i = 0; i < name.length; i++) {
    if (name[i] == " ") {
        username += ".";
    } else {
        username += name[i].toLowerCase();
    }
}

let result = username + 123;

console.log(result);