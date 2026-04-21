// Q.19. Format a name:

// * "shahzad saddique" → "S. Saddique"


let name = "shahzad saddique";


let parts = name.split(" ");

let result = parts[0][0].toUpperCase() + (parts[1] ? ". " + parts[1] : "");

console.log(result);