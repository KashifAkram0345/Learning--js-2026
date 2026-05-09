function secondLargest(arr) {
  let str2 = [...new Set(arr)];
  str2.sort((a,b) => b - a);
  return str2[1];
}

console.log(secondLargest([10,5,8,20]));