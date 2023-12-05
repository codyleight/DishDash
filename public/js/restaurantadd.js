const submitRestaurant = async (event) => {
    event.preventDefault();
    
    const restaurant_name = document.querySelector('#restaurantName').value.trim();
    const food_type = document.querySelector('#foodType').value.trim();
    
    if (restaurant_name && food_type) {
      const response = await fetch('/restaurant', {
        method: 'POST',
        body: JSON.stringify({ restaurant_name, food_type }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        document.location.replace('/restaurant');
      } else {
        alert('Failed to submit restaurant.');
      }
    }
  };


  document
  .querySelector('.addrestaurant-form')
  .addEventListener('submit', submitRestaurant);