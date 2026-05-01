




let str="race car"
let msg=true;
for(let i=0;i<=str.length/2;i++){
if(str[i]!==str[str.length-1-i]){
    msg=false;
    break;
}
}
console.log(msg)