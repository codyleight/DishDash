const resturantAddFunc = async (event) => {
    event.preventDefault();
        document.location.replace('/resturants/add');
     
  };



document
  .querySelector('.resturantAdd')
  .addEventListener('click', resturantAddFunc);