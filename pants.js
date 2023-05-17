const product = [
     {
     	id: 1,
     	image: 'images/pants7.jpg';
     	title: 'Pants for men';
     	price: '20$';
     },
       {
     	id: 2,
     	image: 'images/pants8.jpg';
     	title: 'Pants for men';
     	price: '30$';
     },
      {
     	id: 3,
     	image: 'images/pants3.jpg';
     	title: 'Pants for men';
     	price: '10$';
     },
      {
     	id: 4,
     	image: 'images/pants2.jpg';
     	title: 'Pants for men';
     	price: '30$';
     },
      {
     	id: 5,
     	image: 'images/pants1.jpg';
     	title: 'Pants for men';
     	price: '20$';
     },
      
	]
let cart = document.getElementById('root')
cart.innerHTML = categories.map((item))=>
{
    var {image, title, price} = item;
    return{
    
    }
}