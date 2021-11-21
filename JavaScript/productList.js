import { product } from "./product.js";

const productsList = document.querySelector("#products");

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
        list.innerHTML += `<li class='card-text'>Description : ${product[i].productDesc}</li>`;
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