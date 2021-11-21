const productsList = document.querySelector("#products");
const search = document.querySelector("#search");
let check = false;
let filterSearch = search.addEventListener("click", () => {
    check = !check;
    if (check == true) {
        document.querySelector(
            "#searchBar"
        ).innerHTML += `<input type="text" style="width:180%;" class="form-control mb-2" placeholder="Enter Your Shirt" id="form">`;
        let log = document.querySelector("#form")
        log.addEventListener("keyup", () => {
            const input = document.querySelector("#form");
            let filter = input.value.toLowerCase();
            let infoOfProduct = productsList.getElementsByClassName("card");
            for (let i = 0; i < infoOfProduct.length; i++) {
                let txtValue = infoOfProduct[i].textContent;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    infoOfProduct[i].style.display = "";
                } else {
                    infoOfProduct[i].style.display = "none";
                }
            }
        });
    } else document.querySelector("#searchBar").innerHTML = "";
});