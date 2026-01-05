let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  validation(formData.get("email"), formData.get("password"));
});

let validation = async (username, password) => {
  let response = await fetch("http://localhost:3000/users");
  let usersData = await response.json();
  let user = usersData.filter(
    (value) => value.email == username && value.password == password
  );
  if (user.length == 1) {
    alert("login Successful");
    location.href = "../homepage/index.html";
    localStorage.setItem("id",user[0].id)
  } else {
    alert("Login failed Try again");
  }
};
