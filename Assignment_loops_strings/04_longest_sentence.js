let str="I love programming challenges"
let str2=str.split(" ")
let longest=""
for(let i=0;i<str2.length;i++){
if(str2[i].length>longest.length){
  longest=str2[i];

}
}
console.log(longest)