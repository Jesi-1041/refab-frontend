// 1) Initialize global cart from LocalStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];




// 2) Add item to cart (merges duplicates)
function addToCart(name, price) {
  // Check if item already exists
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  // Save back to LocalStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${name} added to cart! (Quantity: ${existing ? existing.qty : 1})`);
  console.log('Current cart:', cart);
}

// 3) (Optional) Log on page load
console.log("Website Loaded Successfully! Cart contains", cart.length, "item(s).");
