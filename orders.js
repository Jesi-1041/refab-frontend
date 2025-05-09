// Display all orders on page load
window.onload = function() {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    let ordersList = document.getElementById('orders-list');
  
    if (orders.length === 0) {
      ordersList.innerHTML = "<p>No orders placed yet.</p>";
      return;
    }
  
    let html = "";
  
    orders.forEach(order => {
      html += `<div class="order">
        <h3>Order ID: ${order.id}</h3>
        <p>Date: ${order.date}</p>
        <ul>`;
      
      // List each item in the order
      order.items.forEach(item => {
        html += `<li>${item.name} - ₹${item.price}</li>`;
      });
      
      html += `</ul><hr></div>`;
    });
  
    // Populate the orders list with the HTML
    ordersList.innerHTML = html;
  };
  
