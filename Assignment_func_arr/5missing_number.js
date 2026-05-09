function missArray(arr){
    for(let i=0;i<arr.lenght;i++){
        if(arr[i+1]!==arr[i]+1){
            return arr[i]+1
        }
    }
}
console.log(missArray([1,2,3,4,5]))