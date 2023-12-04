const resturantAddFunc = async (event) => {
    event.preventDefault();
        document.location.replace('/resturants/add');
     
  };


  const submitResturaunt = async (event) => {
    event.preventDefault();

    console.log("Submitting resturant.")
  
    const resturantName = document.querySelector('#resturantName').value.trim();
    const foodType = document.querySelector('#foodtype').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/resturant/', {
        method: 'POST',
        body: JSON.stringify({ resturantName, foodType }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/resturant');
      } else {
        alert('Failed to log in.');
      }
    }
  };



document
  .querySelector('.resturantAdd')
  .addEventListener('click', resturantAddFunc);


  document
  .querySelector('.addresturant-form')
  .addEventListener('submit', submitResturaunt);