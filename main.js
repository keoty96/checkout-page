let bagAddBtn = document.getElementById("bag-add");
let shoeAddBtn = document.getElementById("shoe-add");
let bagSubBtn = document.getElementById("bag-sub");
let shoeSubBtn = document.getElementById("shoe-sub");

let bagPrice = 54.99;
let shoePrice = 74.99;
let total, bagQuant, shoeQuant, itemsQuant;
total = bagQuant = shoeQuant = itemsQuant = 0;

bagAddBtn.addEventListener("click", addBag);
shoeAddBtn.addEventListener("click", addShoe);
bagSubBtn.addEventListener("click", subBag);
shoeSubBtn.addEventListener("click", subShoe);

/* Adding functions */
function addBag() {
    if (bagQuant < 5) {
        bagQuant += 1;
        console.log(bagQuant);
        total += bagPrice;
    } else {
        alert("No more than 5 bags!");
    }
    addShipping();
    document.getElementById("bag-amount").innerHTML = bagQuant;
    document.getElementById("total-price").innerHTML = "$" + total.toFixed(2);
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
    document.getElementById("total-price").innerHTML = "$" + total.toFixed(2);
}

/* substract functions */
function subBag() {
    if (bagQuant > 0) {
        bagQuant -= 1;
        total -= bagPrice;
    } else {
        bagQuant = 0;
        total = 0
    }
    document.getElementById("bag-amount").innerHTML = bagQuant;
    document.getElementById("total-price").innerHTML = "$" + total.toFixed(2);
}

function subShoe() {
    if (shoeQuant > 0) {
        shoeQuant -= 1;
        total -= shoePrice;
    } else {
        shoeQuant = 0;
        total = 0
    }
    document.getElementById("shoe-amount").innerHTML = shoeQuant;
    document.getElementById("total-price").innerHTML = "$" + total.toFixed(2);
}

/* shipping function */
function addShipping() {
    itemsQuant = bagQuant + shoeQuant;
    if (itemsQuant === 1) {
        total = total + 19.00;
    } else {
        total = total;
    }
}
