const product = [
     {
     	id: 1,
     	image: 'images/reebok1.png';
     	title: 'Reebok Shoes';
     	price: '90$';
     },
       {
     	id: 2,
     	image: 'images/adidas.png';
     	title: 'Adidas Shoes';
     	price: '75$';
     },
      {
     	id: 3,
     	image: 'images/reebok2.png';
     	title: 'Reebok Shoes';
     	price: '65$';
     },
      {
     	id: 4,
     	image: 'images/nikeairmax.png';
     	title: 'Air Max';
     	price: '130$';
     },
      {
     	id: 5,
     	image: 'images/underarmourshoes.png';
     	title: 'underarmour shoes';
     	price: '150.00$';
     },
      {
     	id: 6,
     	image: 'images/adidas2.png';
     	title: 'Adidas Shoes';
     	price: '150.00$';
     }
	]
let cart = document.getElementById('root')
cart.innerHTML = categories.map((item))=>
{
    var {image, title, price} = item;
    return{
    
    }
}