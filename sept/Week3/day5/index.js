let modeBtn = document.querySelector(".mode")
let currMode="light";//dark
modeBtn.addEventListener(("click"), ()=>{
    console.log("you are trying to change mode");
    if(currMode==="light"){
        currMode="dark";
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }else{
        currMode="light";
        document.body.style.backgroundColor="white";
        document.body.style.color="black";

    }
    console.log(currMode);
})