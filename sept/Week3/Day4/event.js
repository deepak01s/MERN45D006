// console.log("today we are learing Event");

// const button=document.getElementById("btn");
// button.onclick=()=>{
//     document.body.style.backgroundColor="aqua";
// }

// button.onkeyup=()=>{
//     console.log("button clicked by keyboard");
// }

// const input=document.querySelector("input");

// input.onchange=(e)=>{
//     console.log("input field change",e.target.value);
// }
// const p=document.querySelector("p");
// p.onmouseover=()=>{
//     console.log("mouse over");
// }

// document.querySelector("form").onsubmit=(e)=>{
//     e.preventDefault()
// console.log("form submitted");
// }


let newBtn = document.createElement("button");
newBtn.innerText="click me";
newBtn.style.backgroundColor="green"
console.log(newBtn);

// let div=document.querySelector("div");
// div.prepend(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);

// let div=document.querySelector("div");
// div.after(newBtn);
// let para=document.querySelector("p");
// para.before(newBtn);

let heading=document.createElement("h1")
heading.innerText="Hello friends";
heading.style.color="aqua"; 
heading.style.textAlign="center";
heading.style.fontFamily="Arial";
document.querySelector("body").prepend(heading)


