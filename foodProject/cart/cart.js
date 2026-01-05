import { displayCartProducts } from "../utilities/index.js";

displayCartProducts();

let placeOrderButton = document.getElementById("placeOrder");
placeOrderButton.addEventListener("click", () => {
  location.href = "../address/address.html";
});
