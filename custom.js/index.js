//display category
let xdata = localStorage.getItem("CatDetail");
let catx = JSON.parse(xdata);

let row = '';
let len = catx.catInfo.length;

for (let i = 0; i < len; i++) {

  // document.info.categoryInfo[i].row;
  // row+= "<a href='#' class='dropdown-item'>Dresses</a>";
  row += "<a href='#' class='dropdown-item'>" + catx.catInfo[i].name + "</a>";


}
document.getElementById('nav-item').innerHTML = row;


/* --------------------------------------------  */


//add to cart
document.getElementById('cart-btn').addEventListener("click", addtocart);
// Function to add a product to the cart
function addtocart(pid) {
  // Get the product details from local storage
  var cart = localStorage.getItem("ProductDetail");
  var cartItems = [];
  // If the cart already exists, parse it from JSON
  if (cart) {
    cartItems = JSON.parse(cart);
  }
  // Check if the product is already in the cart
  
  var itemIndex = -1;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].pid === pid) {
      itemIndex = i;
      break;
    }
  }

  if (itemIndex != -1) {
    // If the product already exists in the cart, increment its quantity
    cartItems[itemIndex].qty++;
  } else {
    // Otherwise, add a new item to the cart
    let len = cartItems.length;
    let product = {
      id: len + 1,
      pid: pid,
      name: pname,
      price: price,
      qty: 1
    };
    cartItems.push(product);
  }

  localStorage.setItem("ProductDetail", JSON.stringify(cartItems));
  alert("Product added to cart");
  console.log("Product added to cart");
}








