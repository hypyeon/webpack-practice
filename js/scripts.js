// Business logic: 
function Order(orderName, size, firstToppings, secondToppings, method) {
    this.orderName = orderName;
    this.size = size;
    this.firstToppings = firstToppings;
    this.secondToppings = secondToppings; 
    this.method = method;
}
Order.prototype.getToppingNames = function() {
    let arr = this.firstToppings.concat(this.secondToppings);
    if (arr.length !== 0) {
        return arr.join(', ');
    } else {
        return 'none';
    }
}
Order.prototype.getTotalPrice = function() {
    let priceForSize;
    switch (this.size) {
        case 'small': 
            priceForSize = 9.5;
            break;
        case 'medium':
            priceForSize = 12.75;
            break;
        case 'large':
            priceForSize = 16.25;
            break;
    }
    if (this.size === 'small') {
        priceForSize = 9.5;
    } else if (this.size === 'medium') {
        priceForSize = 12.75;
    } else if (this.size === 'large') {
        priceForSize = 16.25;
    } else {
        window.location.reload();
    }
    const priceForFirstToppings = this.firstToppings.length * 2;
    const priceForSecondToppings = this.secondToppings.length * 3;

    let totalPrice = priceForSize + priceForFirstToppings + priceForSecondToppings;
    if (this.method === "pickup") {
        totalPrice *= 0.95;
    } 
    return totalPrice.toFixed(2);
}
Order.prototype.discountEligibility = function() {
    if (this.method === "pickup") {
        return 'Yes';
    } else {
        return 'No';
    }
}
function formatName(name) {
    if (name !== '') {
        return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    } 
}

// UI logic:
function getName() {
    const name = document.getElementById("name");
    return formatName(name.value);
}
function getSize() {
    const sizes = document.querySelectorAll('input[name="size"]');
    let selectedSize;
    for (const size of sizes) {
        if (size.checked) {
            selectedSize = size.id;
            break;
        }
    }
    return selectedSize;
}
function getFirstToppings() {
    const toppings = document.querySelectorAll('input[name="first"]');
    let selectedArr = [];
    for (const topping of toppings) {
        if (topping.checked) {
            selectedArr.push(topping.nextElementSibling.textContent);
        }
    }
    return selectedArr;
}
function getSecondToppings() {
    const toppings = document.querySelectorAll('input[name="second"]');
    let selectedArr = [];
    for (const topping of toppings) {
        if (topping.checked) {
            selectedArr.push(topping.nextElementSibling.textContent);
        }
    }
    return selectedArr;
}
function getMethod() {
    const methods = document.querySelectorAll('input[name="method"]');
    let selectedMethod;
    for (const method of methods) {
        if (method.checked) {
            selectedMethod = method.id;
            break;
        }
    }
    return selectedMethod;
}
let i = 1;
function formHandler() {
    const form = document.getElementById("orderInfo");
    form.addEventListener("submit", e => {
        e.preventDefault();
        // get all UI info:
        const orderName = getName();
        const size = getSize();
        const first = getFirstToppings();
        const second = getSecondToppings();
        const method = getMethod();
        // create an Object with info:
        const orderInfo = new Order(orderName, size, first, second, method);
        // create order name lists:
        document.getElementById(`order-${i}`).innerText = `${orderInfo.orderName}'s Order`;
        document.getElementById(`order-${i}`).style.color = 'black';
        document.getElementById(`detail-${i}`).classList.remove("hidden");
        // update order summary: 
        document.getElementById(`sum-name-${i}`).innerText = orderInfo.orderName;
        document.getElementById(`sum-size-${i}`).innerText = formatName(orderInfo.size);
        document.getElementById(`sum-topping-${i}`).innerText = orderInfo.getToppingNames();
        document.getElementById(`sum-discount-${i}`).innerText = orderInfo.discountEligibility();
        document.getElementById(`sum-price-${i}`).innerText = orderInfo.getTotalPrice();
        i++;
        form.reset();
    });
    const detailBtnOne = document.getElementById("detail-1");
    detailBtnOne.addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("list-1").classList.add("hidden");
        document.getElementById("orderDetail-1").classList.remove("hidden");
    })
    const confirmBtnOne = document.getElementById("confirm-1");
    confirmBtnOne.addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("list-1").classList.remove("hidden");
        document.getElementById("orderDetail-1").classList.add("hidden");
    })
    const detailBtnTwo = document.getElementById("detail-2");
    detailBtnTwo.addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("list-2").classList.add("hidden");
        document.getElementById("orderDetail-2").classList.remove("hidden");
    })
    const confirmBtnTwo = document.getElementById("confirm-2");
    confirmBtnTwo.addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("list-2").classList.remove("hidden");
        document.getElementById("orderDetail-2").classList.add("hidden");
    })
    const detailBtnThree = document.getElementById("detail-3");
    detailBtnThree.addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("list-3").classList.add("hidden");
        document.getElementById("orderDetail-3").classList.remove("hidden");
    })
    const confirmBtnThree = document.getElementById("confirm-3");
    confirmBtnThree.addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("list-3").classList.remove("hidden");
        document.getElementById("orderDetail-3").classList.add("hidden");
    })
}

window.onload = () => {
    formHandler();
}
