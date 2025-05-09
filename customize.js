// Handle custom order submission
function submitCustomOrder(event) {
    event.preventDefault(); // Prevent page reload
    
    // Get form data
    const bagType = document.querySelector('select').value;
    const colors = document.querySelector('input[type="text"]').value;
    const features = document.querySelector('textarea').value;
    const clothFile = document.querySelector('input[type="file"]').files[0];
    
    // Create a custom order object
    const customOrder = {
      id: Date.now(),                // Unique ID based on timestamp
      bagType: bagType,
      colors: colors,
      features: features,
      clothFile: clothFile ? clothFile.name : 'None', // File name if uploaded
      date: new Date().toLocaleString() // Timestamp of order
    };
  
    // Save custom order in LocalStorage
    let customOrders = JSON.parse(localStorage.getItem('customOrders')) || [];
    customOrders.push(customOrder);
    localStorage.setItem('customOrders', JSON.stringify(customOrders));
  
    // Clear the form and show thank you message
    alert("Thank you! Your custom bag order has been received.");
    document.getElementById("custom-form").reset();
  }
  
  