let productContainer = document.querySelector(".container-fluid");
export let fetchFood = async (type = "") => {
  let response = await fetch("http://localhost:3000/foodProducts");
  let data = await response.json();
  let filteredFood = data.filter((value) => value.category == type);
  if (filteredFood.length >= 1) {
    displayProducts(filteredFood);
  } else {
    displayProducts(data);
  }
};

export let displayCartProducts = async () => {
  let userResponse = await fetch(
    `http://localhost:3000/users/${localStorage.getItem("id")}`
  );
  let userData = await userResponse.json();
  displayProducts(userData.cart, "delete");
};
let displayProducts = (data, deleteValue = "") => {
  data.map((value) => {
    let img = document.createElement("img");
    let itemName = document.createElement("h1");
    let price = document.createElement("h1");
    let rating = document.createElement("h1");
    let addToCart = document.createElement("button");
    let deleteButton = document.createElement("button");
    let add_delete = document.createElement("aside");
    let article = document.createElement("article");

    // Assigning the values

    itemName.innerHTML = `${value.itemName}`;
    price.innerHTML =`₹${value.price}`;
    rating.innerHTML = `${value.rating}⭐`;
    img.src = value.image;
    addToCart.innerHTML = "Add To Cart";
    deleteButton.innerHTML = "Delete";

    // Adding function to the add to cart

    addToCart.addEventListener("click", () => {
      console.log(value);
      userDetails(localStorage.getItem("id"), value);
    });

    // Deleting product from cart

    deleteButton.addEventListener("click", () => {
      deleteProductInCart(localStorage.getItem("id"), value);
    });

    if (deleteValue == "delete") {
      add_delete.appendChild(deleteButton);
    } else {
      add_delete.appendChild(addToCart);
    }
    article.append(
      img,
      itemName,
      price,
      rating,
      add_delete
    );
    productContainer.appendChild(article);
  });
};

let userDetails = async (id, product) => {
  let userResponse = await fetch(`http://localhost:3000/users/${id}`);
  let userData = await userResponse.json();
  let updateCart = [...userData.cart, product];
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      cart: updateCart,
    }),
  });
};

let deleteProductInCart = async (id, product) => {
  let userResponse = await fetch(`http://localhost:3000/users/${id}`);
  let userData = await userResponse.json();
  let filterData = userData.cart.filter((value) => value.id != product.id);
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      cart: filterData,
    }),
  });
};
