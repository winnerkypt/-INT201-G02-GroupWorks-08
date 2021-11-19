import { product } from "./product.js";
let addCart = document.querySelectorAll("#add");
let cartNumbers = document.querySelector("#cart");

export let quality = 0;
if (localStorage.length < 1) {
    localStorage.setItem("amount", 0);
    cartNumbers.innerHTML = `${localStorage.getItem("amount")}`;
} else {
    cartNumbers.innerHTML = `${localStorage.getItem("amount")}`;
}
let amount = localStorage.getItem("amount");
console.log(localStorage.length);
for (let i = 0; i < addCart.length; i++) {
    let cart = []
    addCart[i].addEventListener("click", () => {
        if (product[i].productId != cart) {
            cart = product[i].productId
            localStorage.setItem(product[i].productId, quality = 1)
        } else {
            localStorage.setItem(product[i].productId, quality = 1)
        }
        alert(`ADD ${product[i].productName} TO CART ! ! ! `)
        localStorage.setItem("amount", ++amount); //เพิ่มจำนวนสินค้าในตะกร้า
        cartNumbers.innerHTML = `${amount}`;
    })
}

let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    localStorage.setItem("amount", 0);
    amount = localStorage.getItem("amount")
    cartNumbers.innerHTML = `${amount}`;
    for (let i = 0; i < product.length; i++) {
        localStorage.removeItem(product[i].productId)

    }
})