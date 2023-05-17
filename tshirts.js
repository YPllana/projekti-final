const product = [
     {
     	id: 1,
     	image: 'images/nike11.png';
     	title: 'Nike T-Shirt';
     	price: '38$';
     },
       {
     	id: 2,
     	image: 'images/nike21.png';
     	title: 'Nike T-Shirt';
     	price: '35$';
     },
      {
     	id: 3,
     	image: 'images/addidas11.png';
     	title: 'Adidas T-Shirt';
     	price: '38$';
     },
      {
     	id: 4,
     	image: 'images/addidas21.png';
     	title: 'Adidas T-Shirt';
     	price: '40$';
     },
      {
     	id: 5,
     	image: 'images/puma11.png';
     	title: 'Puma T-Shirt';
     	price: '25$$';
     },
      {
     	id: 6,
     	image: 'images/puma21.png';
     	title: 'Puma T-Shirt';
     	price: '45$$';
     }
	]
let cart = document.getElementById('root')
cart.innerHTML = categories.map((item))=>
{
    var {image, title, price} = item;
    return{
    
    }
}