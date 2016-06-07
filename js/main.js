var total = 0;

// Keeps track of our items in the cart
var isBlueInCart = false;
var isPinkInCart = false;
var isOrangeInCart = false;


// Gets the HTML elements for our subtotal and total boxes
var subtotalBox = document.getElementById('subtotal');
var totalBox = document.getElementById('total');


// Gets the HTML elements for our boxes
var blueCart = document.getElementById('blueCart');
var pinkCart = document.getElementById('pinkCart');
var orangeCart = document.getElementById('orangeCart');
var imageHolder = document.getElementById('mostRecentClickedShirt');

// What happens after a user clicks the add to cart button?
function addToCart(price,color,image){

	if(color==='blue' && isBlueInCart === false){
		total += price;
		isBlueInCart = true;
		blueCart.className = "active subbox";
	}
	else if(color==='blue' && isBlueInCart === true){
		total -= price;
		isBlueInCart = false;
		blueCart.className = "subbox";
	}
	else if(color==='pink' && isPinkInCart === false){
		total += price;
		isPinkInCart = true;
		pinkCart.className = "active subbox";
	}
	else if(color==='pink' && isPinkInCart === true){
		total -= price;
		isPinkInCart = false;
		pinkCart.className = "subbox";
	}
	else if(color==='orange' && isOrangeInCart === false){
		total += price;
		isOrangeInCart = true;
		orangeCart.className = "active subbox";
	}
	else if(color==='orange' && isOrangeInCart === true){
		total -= price;
		isOrangeInCart = false;
		orangeCart.className = "subbox";
	}

	subtotalBox.innerHTML = total;
	totalBox.innerHTML = calculateFinalTotal();
	imageHolder.src = image;
	imageHolder.alt = "AFTER CLICK";

}


// CalculateFinalTotal
function calculateFinalTotal() {
	return (total*.065)+total;
}

