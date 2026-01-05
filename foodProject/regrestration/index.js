let form = document.querySelector("form");
form.addEventListener("submit", () => {
  let formData = new FormData(form);
  let user = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    contact: formData.get("contact"),
    gender: formData.get("gender"),
    dob: formData.get("dob"),
    cart: [],
  };
  addUser(user);
});
let addUser = async (data) => {
  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
