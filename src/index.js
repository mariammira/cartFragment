// import faker from 'faker';
// const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
// document.querySelector('#cart-dev').innerHTML = cartText;
import {store} from "container/store";
let products = '';
const cartText = `  <h2> cart Items</h2>
                    <div id="productsList"></div>
                    <button id="clearCartBtn" > clear cart </button>`;

document.querySelector('#cart-dev').innerHTML = cartText;

function updateCart(cart ){
    let newProducts = ''
    for(let i=0; i<cart.length;i++)newProducts +=`<div> ${cart[i].name}</div>`
    document.querySelector('#productsList').innerHTML = newProducts;
}
function emptyCart(event){
    products='';
    emitTimestamp = performance.now()
 }

const button =document.querySelector('#clearCartBtn');
if(button) button.addEventListener('click',emptyCart);

store.subscribe(() => {
  const state = store.getState();
  console.log("Cart updated:", state.cart);
  updateCart(state.cart);
   const receiveTimestamp = performance.now();
  console.log(receiveTimestamp ,state.cart[state.cart.length-1].emitTimestamp);
   const  latency = receiveTimestamp - state.cart[0].emitTimestamp;
   console.log('latency',latency)
});
