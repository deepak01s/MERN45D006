// console.log(document);
// const newArr=document.getElementsByTagName("h1")
// console.log(newArr);
    
// const p=document.getElementById("para")
// console.log(p.innerText);

// const newArr1=document.getElementsByClassName("paragraph");
// console.log(newArr1);


// const h1=document.querySelectorAll("h1")
// console.log(h1);
// const s=document.querySelector("#para")
// console.log(s)
// const nArr=document.querySelectorAll(".paragraph")
// console.log(nArr);
// console.log(h1.innerText);
// console.log(h1.inner);
// h1.get("style");

const h2=document.createElement("h2")
h2.innerText="This is h2"
console.log(h2);

const div=document.querySelector("div")
div.append(h2,h1)
console.log(document.body);
