import { Cart } from "../models/Cart.js";
import { Products } from "../models/Products.js";
import { fetchData } from "../utils/httpReq.js"


const productsNode = document.querySelector(".products")
const cartListNode = document.querySelector(".card__list")
const totalPrice = document.querySelector(".total__price").querySelector("span")


const render = async () =>{
    const productData = await  fetchData();
    const cartInstance = new Cart(cartListNode,totalPrice)
    const productsInstance = new Products(productsNode,productData,cartInstance)
    productsInstance.showProducts()    
}


document.addEventListener("DOMContentLoaded",render)