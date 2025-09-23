let newBtn=document.createElement("newBtn")
newBtn.innerText="click me";
newBtn.style.backgroundColor="aqua"
newBtn.style.color="white"
newBtn.style.fontSize="50px"
newBtn.style.padding="10px"
newBtn.style.border ="1px solid black"
newBtn.style.alignContent="center"
newBtn.style.margin="50px"
newBtn.style.display="flex"
newBtn.style.textAlign="center"

console.log(newBtn);
document.body.prepend((newBtn))




const btn = document.getElementById("btn");
const username = document.getElementById("username");

btn.addEventListener("click", () => {
    const value = username.value;
    localStorage.setItem("username", value);
});
