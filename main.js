let bagAddBtn = document.getElementById("bag-add");
let shoeAddBtn = document.getElementById("shoe-add");

let bagPrice = 54.99;
let shoePrice = 74.99;
let total, bagQuant, shoeQuant, itemsQuant;
total = bagQuant = shoeQuant = itemsQuant = 0;

bagAddBtn.addEventListener("click", addBag);
shoeAddBtn.addEventListener("click", addShoe);


function addBag() {
    if (bagQuant < 5) {
        bagQuant += 1;
        total += bagPrice;
    } else {
        alert("No more than 5 bags!");
    }
    addShipping();
    document.getElementById("bag-amount").innerHTML = bagQuant;
    document.getElementById("total-price").innerHTML = total;
}

function addShoe() {
    if (shoeQuant < 5) {
        shoeQuant += 1;
        total += shoePrice;
    } else {
        alert("No more than 5 Shoes!");
    }
    addShipping();
    document.getElementById("shoe-amount").innerHTML = shoeQuant;
    document.getElementById("total-price").innerHTML = total;
}

function addShipping() {
    itemsQuant = bagQuant + shoeQuant;
    if (itemsQuant === 1) {
        total = total + 19.00;
    } else {
        total = total;
    }
}
