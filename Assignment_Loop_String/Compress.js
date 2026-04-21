let str="aaabbc";
let str2="null";
 let count=1;
for(let i=0;i<=str.length;i++){
    if(str[i]===str[i+1]){
        count++
    }
    else{
        str2=str[i]+count;
        count=1;

    }
    console.log(str2);
}
