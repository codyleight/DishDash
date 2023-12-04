const resturantAddFunc = async (event) => {
    event.preventDefault();
        document.location.replace('/restaurant/add');
        
  
     
  };


 


document
  .querySelector('.restaurantAdd')
  .addEventListener('click', resturantAddFunc);


