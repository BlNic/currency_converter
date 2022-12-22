let converter = document.querySelector(".converterForm");
let quantityField = document.querySelector(".jsQuantity");
let usd = document.querySelector(".currency__usd");
let resultField = document.querySelector(".jsResult");

converter.addEventListener("input"), (event) => {
    event.preventDefault();

    let quantity = quantityField.value;
    let result = quantity * usd;
    jsResult.innerTextresult.toFixed(2)

}






