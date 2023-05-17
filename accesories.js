const product = [
     {
     	id: 1,
     	image: 'images/watches2.jpg';
     	title: 'Rolex Watches';
     	price: '90$';
     },
       {
     	id: 2,
     	image: 'images/watches1.jpg';
     	title: 'Rolex Watches';
     	price: '90$';
     },
      {
     	id: 3,
     	image: 'images/ring2.jpg';
     	title: 'Ring Miansai,Cartier';
     	price: '80$';
     },
      {
     	id: 4,
     	image: 'images/ring1.jpg';
     	title: 'Golden Ring';
     	price: '100$';
     },
      {
     	id: 5,
     	image: 'images/sunglasses2.jpg';
     	title: 'Sunglasses for men';
     	price: '30$';
     },
      {
     	id: 6,
     	image: 'images/sunglassses1.jpg';
     	title: 'sunglasses for men';
     	price: '20$';
     }
	]
let cart = document.getElementById('root')
cart.innerHTML = categories.map((item))=>
{
    var {image, title, price} = item;
    return{
    
    }
}