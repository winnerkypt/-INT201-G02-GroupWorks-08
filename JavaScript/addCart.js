import { product } from "./product.js";
const addCart = document.querySelectorAll("#add"); // id ของปุ่ม add
const cartNumbers = document.querySelector("#cart"); //id ของตัวเลขตรงกระตร้า

let amount = localStorage.getItem("amount");
if (localStorage.length < 1) { //เช็กว่ามีอะไรอยู่ใน Local มั๊ย
    localStorage.setItem("amount", 0); //ถ้าไม่มีให้ตั้งค่า amount เป็น 0
    cartNumbers.innerHTML = `${localStorage.getItem("amount")}`;
} else {
    cartNumbers.innerHTML = `${localStorage.getItem("amount")}`;
}
let cart = []
let quality = 0;
for (let i = 0; i < addCart.length; i++) {

    addCart[i].addEventListener("click", () => {

        if (product[i].productId != cart) { //เช็กว่าสินค้าอยู่ในตะกร้ายัง 
            cart = product[i].productId //ถ้ายังให้เอาลงตะกร้าแล้วตั้งไอดีสินค้านั้นเป็น 1
            localStorage.setItem(product[i].productId, quality = 1)
        } else {
            localStorage.setItem(product[i].productId, quality += 1) //ถ้ามีแล้วบวกเพิ่มได้เลย
        }

        alert(`ADD ${product[i].productName} TO CART ! ! ! `)
        localStorage.setItem("amount", ++amount); //เพิ่มจำนวนสินค้าในตะกร้า
        cartNumbers.innerHTML = `${amount}`; //เอา amount ไปเปลี่ยนตัวเลขหน้าเบราวเซอร์ที่ html
    })
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    console.log(cart)
    localStorage.clear()
    localStorage.setItem("amount", 0);
    quality = 0;
    cart = [];
    amount = localStorage.getItem("amount")
    cartNumbers.innerHTML = `${amount}`;
})