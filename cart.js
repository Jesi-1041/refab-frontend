// 1) Display cart items and total on page load
window.onload = function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv   = document.getElementById('cart-items');
    const totalDiv  = document.getElementById('cart-total');
  
    if (cartItems.length === 0) {
      cartDiv.innerHTML   = "<p>Your cart is empty.</p>";
      totalDiv.innerHTML  = "";
      return;
    }
  
    let html  = "";
    let total = 0;
    cartItems.forEach((item, index) => {
      // assume qty = 1 if not set
      const qty   = item.qty || 1;
      const line  = item.price * qty;
      html += `
        <div class="cart-item">
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price} &times; ${qty} = ₹${line}</p>
          <button onclick="removeItem(${index})" class="btn">Remove</button>
          <hr>
        </div>
      `;
      total += line;
    });
  
    cartDiv.innerHTML  = html;
    totalDiv.innerHTML = `<h3>Total: ₹${total}</h3>`;
  };
  
  // 2) Remove a single item and refresh display
  function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
  }
  
  // 3) Checkout: save order and clear cart
  function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
  
    // Load existing orders
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
  
    // Create a new order object
    const newOrder = {
      id: Date.now(),                       // unique
      items: cart,
      date: new Date().toLocaleString()     // e.g. "4/26/2025, 10:15:30 AM"
    };
  
    // Save it
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
  
    // Clear the cart
    localStorage.removeItem('cart');
  
    alert("Thank you! Your order has been placed!");
    window.location.href = "orders.html";
  }
  