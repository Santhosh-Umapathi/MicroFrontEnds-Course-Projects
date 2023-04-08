import { mount as productsMount } from "products/ProductsIndex"; // Import from key / Remote Alias
import { mount as cartMount } from "cart/CartShow"; // Import from key / Remote Alias

console.log("Container!");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
