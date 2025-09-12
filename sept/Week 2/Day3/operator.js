console.log("Hello today we are going to start operator")

// 3 ways

// var
// let
// const

// declaration 
// initialization (value,variable,expression)
// var a=10;
// console.log(a)

// var exp=a+2;
// console.log(exp)

// var b=a;
// console.log(b)


// var
// declaration
// *global level

var a = 10;

console.log(a)

{
    console.log(a)
}

function access() {
    console.log(a)
}
access()

//* declaration at block level
{
    var b = 20;
    console.log(b)
}

console.log(b)
// this is the bug in the var

//* declaration at function level

function declare() {
    var v = 40;
    console.log(v)
}
declare()

// console.log(v)


// let 
// declaration at global

let l = 50;
console.log(l)

// declaration at block level
{
    let c = 60;
    console.log(c)
}

// console.log(c)

// declaration at function level

function declaration() {
    let i = 9;
    console.log(i)
}
declaration()

// console.log(i)

// const 

// declaration at global level
const d = 70
console.log(d)

// declaration at block level

{
    const g = 60;
    console.log(g)
}


//! declaration with initialization

// var 
var p;
console.log(p)

p = 30;
console.log(p)

var p;
p = 90
console.log(p)


// let
let h;
console.log(h)
h = 60;
console.log(h)

h = 90;
console.log(h)


// const 
const j = 34098;
console.log(j)

// j=90;
// console.log(j)

console.log(5 % 3)
console.log(2 ** 3)

let num = 3;
// console.log(num++)
// console.log(num)

// console.log(++num)

// console.log(num--)
// console.log(num)
// console.log(--num)

// num =num+2;
// num+=2;

// num=num-2;
num /= 2
console.log(num)

let num1 = 2;
let num2 = "2";

console.log(num1 === num2)

// console.log(true+9)

console.log(num1!==num2)

console.log((2>1)&&(3>4))
console.log((2<1)||(3>4))

console.log(!false)
console.log(!true)


