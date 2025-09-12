let a = 10;
// if block
if (a < 12) {
    let d=20;
    console.log("a less than 12",d)
}
// console.log(d)

if(a<4){
    console.log("it is true")
}else{
    console.log("it is false")
}


// else if
let age=60;
if(age>80){
    console.log("old man")
}else if(age>60){
    console.log("bibahita")
}else if(age > 40){
console.log("young")
}else{
    console.log("----")
}


console.log(age<18 ? (age>60?"old":"adult"):"not adult")

// const number=prompt("Enter a number")

// if(number%5===0){
//     console.log("this number is divisible by 5")
// }else{
//     console.log("not divisible")
// }

let stScore=75;

if(stScore>=80){
    console.log("grade A")
}else if(stScore >=70){
    console.log("Grade B")
}else if(stScore>=60){
    console.log("Grade C")
}else if(stScore>=50){
    console.log("Grade D")
}else{
    console.log("Fail")
}


console.log("welcome")

// for loop
for(let i=1;i<=5;i++){
    console.log("Welcome to Qlith")
}

// while loop
let c=1;
while(c<=10){
    console.log("Qlith")
    c++
}

// do while loop
let v=0
do{
console.log("Qlith Innovation")
v++
}while(v<=5)