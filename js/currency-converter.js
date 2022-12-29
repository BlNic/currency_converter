let form = document.querySelector(".converterForm");
let jsQuantity = document.querySelector(".jsQuantity");
let jsRate = document.querySelector(".jsRate");
let jsResult = document.querySelector(".jsResult");
let currencyField = document.querySelector(".currencyField");
let usd = document.querySelector(".jsRate__usd");
let eur = document.querySelector(".jsRate__eur");
let gbp = document.querySelector(".jsRate__gbp");

form.addEventListener("input", (event) => {
    event.preventDefault();

    let number = jsQuantity.value;
    let currency = jsRate.value;
    let result = number * currency;

    if (jsRate.value === usd.value) {
        currencyField.innerText = "USD"
    }
    else if (jsRate.value === eur.value) {
        currencyField.innerText = "EUR"
    }
    else if (jsRate.value === gbp.value) {
        currencyField.innerText = "GBP"
    }

    jsResult.innerText = result.toFixed(2);
});

form.addEventListener("reset", () => {
    jsResult.innerText = "0.00";
});
/*
form.addEventListener("reset", () => {
  currencyField.innerText = " ";
}); */
