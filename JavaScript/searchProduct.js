const search = document.querySelector("#search");

let clickSearch = false;
search.addEventListener("click", () => {
  clickSearch = !clickSearch;
  if (clickSearch == true) {
    document.querySelector(
      "#searchBar"
    ).innerHTML += `<input type="text" style="width:180%;" class="form-control mb-2" placeholder="Enter Your Shirt" id="form">`;
    searchProduct();
  } else {
    document.querySelector("#searchBar").innerHTML = "";
  }
});

function searchProduct() {
  let form = document.querySelector("#form");
  const infoOfProduct = document.getElementsByClassName("card") //เอาที่อยู่ใน card มาทั้งหมด
  form.addEventListener("keyup", () => {
    const input = document.querySelector("#form"); //รับค่าหลังจากพิมพ์ลงไปในช่อง    
    for (let i = 0; i < infoOfProduct.length; i++) {
      let txtValue = infoOfProduct[i].textContent; //เอามาเฉพาะข้อความ
      if (txtValue.toLowerCase().indexOf(input.value.toLowerCase())>-1) { //หาอินเดกของ value จาก txtValue
        infoOfProduct[i].style.display = ""; //แสดง
      } else {
        infoOfProduct[i].style.display = "none"; //ไม่แสดง
      }
    }
  });
}
