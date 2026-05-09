function secondLargest(arr) {
  arr = [...new Set(arr)];   
  arr.sort((a, b) => b - a); 
  return arr[1];            
}

console.log(secondLargest([10, 5, 8, 20]));