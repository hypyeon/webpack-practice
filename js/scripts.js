// Business logic: 
function Order(orderName, size, firstToppings, secondToppings, method) {
    this.orderName = orderName;
    this.size = size;
    this.firstToppings = firstToppings;
    this.secondToppings = secondToppings; 
    this.method = method;
}
Order.prototype.getNumOfToppings = function() {
    const numOfFirsts = this.firstToppings.length;
    const numOfSeconds = this.secondToppings.length;
    return `${numOfFirsts} first topping(s) and ${numOfSeconds} second topping(s)`;
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
            selectedArr.push(topping);
        }
    }
    return selectedArr;
}
function getSecondToppings() {
    const toppings = document.querySelectorAll('input[name="second"]');
    let selectedArr = [];
    for (const topping of toppings) {
        if (topping.checked) {
            selectedArr.push(topping);
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
        // hide first section:
        document.getElementById("firstSection").classList.add("hidden");
        // unhide second section:
        document.getElementById("secondSection").classList.remove("hidden");
        // update order summary: 
        document.getElementById("sum-name").innerText = orderInfo.orderName;
        document.getElementById("sum-size").innerText = formatName(orderInfo.size);
        document.getElementById("sum-topping").innerText = orderInfo.getNumOfToppings();
        document.getElementById("sum-discount").innerText = orderInfo.discountEligibility();
        document.getElementById("sum-price").innerText = orderInfo.getTotalPrice();
    })
    const back = document.getElementById("previous");
    const reset = document.getElementById("new");
    back.addEventListener("click", e => {
        e.preventDefault();
        // unhide first section:
        document.getElementById("firstSection").classList.remove("hidden");
        // hide second section:
        document.getElementById("secondSection").classList.add("hidden");
    })
    reset.addEventListener("click", e => {
        e.preventDefault();
        window.location.reload();
    })
}

window.onload = () => {
    formHandler();
}
