import { product } from "./product.js";
// import { filterSearch as search } from "./searchProduct.js";

const productsList = document.querySelector("#products");
// const search = document.querySelector("#search");

// let check = false;
// search.addEventListener("click", () => {
//     check = !check;
//     if (check == true) {
//         document.querySelector(
//             "#searchBar"
//         ).innerHTML += `<input type="text" style="width:180%;" class="form-control mb-2" placeholder="Enter Your Shirt" id="form">`;
//         let log = document.querySelector("#form")
//         log.addEventListener("keyup", () => {
//             const input = document.querySelector("#form");
//             let filter = input.value.toLowerCase();
//             let infoOfProduct = productsList.getElementsByClassName("card");
//             for (let i = 0; i < infoOfProduct.length; i++) {
//                 let txtValue = infoOfProduct[i].textContent;
//                 if (txtValue.toLowerCase().indexOf(filter) > -1) {
//                     infoOfProduct[i].style.display = "";
//                 } else {
//                     infoOfProduct[i].style.display = "none";
//                 }
//             }
//         });
//     } else document.querySelector("#searchBar").innerHTML = "";
// });
// search;
listProduct();

function listProduct() {
    for (let i = 0; i < product.length; i++) {
        let colProduct = document.createElement("span");
        colProduct.style = 'display:inline-block;margin:10px;';

        let divProducts = document.createElement("div");
        divProducts.setAttribute("id", product[i].productId);
        divProducts.setAttribute("class", "card");
        divProducts.style = 'width:18rem;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10);';

        let imgShein = document.createElement("div");
        imgShein.innerHTML += `<img class='card-img-top' src='${product[i].productImg}' width="250px">`;

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let pProductName = document.createElement("h3");
        pProductName.innerHTML = `<h5 class="card-title">${product[i].productName}</h5>`;

        let list = document.createElement("ul");
        list.setAttribute("class", "list-unstyled");
        list.innerHTML += `<li class='card-text'>Des : ${product[i].productDesc}</li>`;
        list.innerHTML += `<li class='card-text'>Price ${product[i].productPrice}</li>`;
        list.innerHTML += `<li class='card-text'>Stock : ${product[i].productStock}</li>`;

        let btnAdd = document.createElement('button');
        btnAdd.setAttribute("class", "btn btn-outline-danger");
        btnAdd.setAttribute("id", "add");
        btnAdd.style.width = "100%";
        btnAdd.textContent = "ADD TO CART";

        divProducts.appendChild(imgShein);
        cardBody.appendChild(pProductName);
        cardBody.appendChild(list);
        cardBody.appendChild(btnAdd);
        divProducts.appendChild(cardBody);
        colProduct.appendChild(divProducts);
        productsList.appendChild(colProduct);

    }
}

// let addCart = document.querySelectorAll("#add");
// let cartNumbers = document.querySelector("#cart");

// let quality = 0;
// if (localStorage.length < 1) {
//     localStorage.setItem("amount", 0);
//     cartNumbers.innerHTML = `${localStorage.getItem("amount")}`;
// } else {
//     cartNumbers.innerHTML = `${localStorage.getItem("amount")}`;
// }
// let amount = localStorage.getItem("amount");
// console.log(localStorage.length);
// for (let i = 0; i < addCart.length; i++) {
//     let cart = []
//     addCart[i].addEventListener("click", () => {
//         if (product[i].productId != cart) {
//             cart = product[i].productId
//             localStorage.setItem(product[i].productId, quality = 1)
//         } else {
//             localStorage.setItem(product[i].productId, quality = 1)
//         }
//         alert(`ADD ${product[i].productName} TO CART ! ! ! `)
//         localStorage.setItem("amount", ++amount); //เพิ่มจำนวนสินค้าในตะกร้า
//         cartNumbers.innerHTML = `${amount}`;
//     })
// }

// let clear = document.querySelector("#clear");
// clear.addEventListener("click", () => {
//     localStorage.setItem("amount", 0);
//     amount = localStorage.getItem("amount")
//     cartNumbers.innerHTML = `${amount}`;
//     for (let i = 0; i < product.length; i++) {
//         localStorage.removeItem(product[i].productId)

//     }
// })