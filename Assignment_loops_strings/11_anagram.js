let str1 = 'listen';
let str2 = 'silent';
let count=0;
for(let i=0;i<=str1.length;i++){
    for(let j=0;j<=str2.length;j++){
        if(str1[i]===str2[j]){
            count++;
            break;
        }
    }
}
let ans=count===str1.length&&str1.length===str2.length
console.log(ans);
