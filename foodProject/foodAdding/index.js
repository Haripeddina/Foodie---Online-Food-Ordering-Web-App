let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let reader = new FileReader();
  reader.onload = (event) => {
    let imageUrl = event.target.result;
    let foodProducts = {
      image: imageUrl,
      itemName: formData.get("itemName"),
      quantity: formData.get("quantity"),
      price: formData.get("price"),
      category: formData.get("category"),
      rating: formData.get("rating"),
    };
    addFoodProduct(foodProducts);
  };
  reader.readAsDataURL(formData.get("image"));
});

let addFoodProduct = async (data) => {
  await fetch("http://localhost:3000/foodProducts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};


