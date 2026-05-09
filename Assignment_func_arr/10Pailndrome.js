function Pailndrome(str){
    let str2="";
    for(let i=str.lenght-1;i>=0;i--){
        str2=str2+str[i]
    }
    return str===str2;
}
console.log(Pailndrome('madam'));