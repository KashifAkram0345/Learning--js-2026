function evenodd(arr){
    return{
        even:arr.filter(n=>n%2==0),
        odd:arr.filter(n=>n%2!==0)
        
    };
}
console.log(evenodd([1,2,3,4,5,6]))