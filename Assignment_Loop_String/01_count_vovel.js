// //1.Q  Write a function that counts how many vowels are in a string.
//     * Ignore case//
//     //* "Hello World" → 3//




let str = "Hello World";

for (let i = 0; i < str.length; i++) {
    if ( str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i] == 'o' ||str[i]=='u')      
    {
        console.log(str[i]);
    }
}
