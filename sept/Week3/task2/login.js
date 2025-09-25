// const loginForm=document.querySelector("form");
// loginForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const email=document.getElementById("email").value
//     const password=document.getElementById("password").value
//     let users=JSON.parse(localStorage.getItem("users")) 
//     let validUser=(users.find (users=>users.email  ===email.trim()))


const form = document.querySelector("form");
const inputs = document.getElementsByTagName("input");
const btn = document.querySelector(".Btn");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name=inputs[0].value;
    const email=inputs[1].value;
    const password=inputs[2].value;
    localStorage.setItem("user",JSON.stringify({name,email,password}));
    alert("Register successfully")
})




// login
const loginForm = document.querySelector("#login-Form");
const loginInputs = document.querySelectorAll(".login-input");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginInputs[0].value.trim();
  const password = loginInputs[1].value.trim();

  let validUser = JSON.parse(localStorage.getItem("user"));

  if (!validUser) {
    alert("No user found. Please register first.");
    return;
  }

  if (validUser.email === email) {
    if (validUser.password === password) {
      alert(`Login Successful! Welcome, ${validUser.name}`);
    } else {
      alert("Wrong password");
    }
  } else {
    alert("Wrong email");
  }
});
