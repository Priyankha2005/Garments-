let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
  updateCount();
}

function updateCount() {
  document.getElementById("count").innerText = cart.length;
}

function loadCart() {
  let cartItems = document.getElementById("cartItems");
  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach(item => {
    cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("total").innerText =
    "Total Amount: ₹" + total;
}

updateCount();