const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
  const name =document.getElementById("name").value;
  const email =document.getElementById("email").value;
  const password =document.getElementById("password").value;
  const phone =document.getElementById("tel").value;
  const address =document.getElementById("address").value;
  const gender =document.getElementById("gender").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
       const newUser = {
        name,
        email,
        password,
        phone,
        address,
        gender
    };
     users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
     alert("Registration Successful");
      form.reset();  

})