// const arr=[1,2,3,4,5,6,"Qlith"]


// const arr=[85,97,44,37,76,60]
// let sum=0;
// for(let v of arr){
//     sum=sum+v;
// }
// let averagemark=sum/arr.length;
// console.log(averagemark);


let arr=["Bloomberg", "Microsoft", "uber", "Google","IBM","Netflix"]
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(1,1,"ola");
console.log(arr);
arr.push("Amazon");
console.log(arr)

// fuction
// fuction declaration
// fuction printsomthing(){
//     console.log("printing");
// }
// printsomthing();

let printsomthing =function(a){
    console.log("printing",a);

}
printsomthing(10);