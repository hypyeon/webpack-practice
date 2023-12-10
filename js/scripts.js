function Order(orderName, size, firstToppings, secondToppings, method) {
    this.orderName = orderName;
    this.size = size;
    this.firstToppings = firstToppings;
    this.secondToppings = secondToppings; 
    this.method = method;
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
function formatName(name) {
    if (name !== '') {
        return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    } 
}
function createTextInput(area, placeholder, id, name) {
    const inputText = document.createElement('input');
    Object.assign(inputText, {
        type: 'text',
        placeholder: placeholder,
        id: id,
        name: name
    });
    area.appendChild(inputText);
}
function getOrderNumInfo() {
    const orderForOne = document.getElementById("onePizza");
    const orderForTwo = document.getElementById("twoPizzas");
    const orderForThree = document.getElementById("threePizzas");
    const nameField = document.getElementById("names");
    orderForOne.addEventListener("click", () => {
        nameField.textContent = '';
        createTextInput(nameField, 'Your order name', 'orderName1', 'orderName1');
    });
    orderForTwo.addEventListener("click", () => {
        nameField.textContent = '';
        createTextInput(nameField, 'Order Name (1st Pizza)', 'orderName1', 'orderName1');
        createTextInput(nameField, 'Order Name (2nd Pizza)', 'orderName2', 'orderName2');
    });
    orderForThree.addEventListener("click", () => {
        nameField.textContent = '';
        createTextInput(nameField, 'Order Name (1st Pizza)', 'orderName1', 'orderName1');
        createTextInput(nameField, 'Order Name (2nd Pizza)', 'orderName2', 'orderName2');
        createTextInput(nameField, 'Order Name (3rd Pizza)', 'orderName3', 'orderName3');
    })
}
function createRadioInput(area, id, name) {
    const inputRadio = document.createElement('input');
    Object.assign(inputRadio, {
        type: 'radio',
        id: id,
        name: name
    });
    area.appendChild(inputRadio);
}
function createCheckboxInput(area, id, name) {
    const inputCheckbox = document.createElement('input');
    Object.assign(inputCheckbox, {
        type: 'checkbox',
        id: id,
        name: name
    });
    area.appendChild(inputCheckbox);
}
function createLabel(area, label, innerText) {
    const radioLabel = document.createElement('label');
    Object.assign(radioLabel, {
        for: label
    });
    radioLabel.innerText = innerText;
    area.appendChild(radioLabel);
}
function createBasePrice(area, label) {
    const basePriceTitle = document.createElement("h4");
    basePriceTitle.innerText = 'Base Price';
    area.appendChild(basePriceTitle);
    createRadioInput(area, "small", label);
    createLabel(area, "small", 'Small (8"): $9.00');
    createRadioInput(area, "medium", label);
    createLabel(area, "medium", 'Medium (10"): $12.50');
    createRadioInput(area, "large", label);
    createLabel(area, "large", 'Large (12"): $16.25');
}
function createToppingTwo(area, label) {
    const toppingTwoTitle = document.createElement("h4");
    toppingTwoTitle.innerText = '$2 Toppings';
    area.appendChild(toppingTwoTitle);
    createCheckboxInput(area, "extraCheese", label);
    createLabel(area, "extraCheese", "Extra Cheese");
    createCheckboxInput(area, "mushroom", label);
    createLabel(area, "mushroom", "Mushroom");
    createCheckboxInput(area, "olive", label);
    createLabel(area, "olive", "Olive");
    createCheckboxInput(area, "pepper", label);
    createLabel(area, "pepper", "Green Bell Pepper");
    createCheckboxInput(area, "basil", label);
    createLabel(area, "basil", "Basil");
    createCheckboxInput(area, "jalapenos", label);
    createLabel(area, "jalapenos", "Jalapenos");
    createCheckboxInput(area, "tomatoes", label);
    createLabel(area, "tomatoes", "Diced Tomatoes");
    createCheckboxInput(area, "spinach", label);
    createLabel(area, "spinach", "Spinach");
    createCheckboxInput(area, "onions", label);
    createLabel(area, "onions", "Onions");
}
function createToppingThree(area, label) {
    const toppingThreeTitle = document.createElement("h4");
    toppingThreeTitle.innerText = "$3 Toppings";
    area.appendChild(toppingThreeTitle);
    createCheckboxInput(area, "pepperoni", label);
    createLabel(area, "pepperoni", "Pepperoni");
    createCheckboxInput(area, "chicken", label);
    createLabel(area, "chicken", "Grilled Chicken");
    createCheckboxInput(area, "bacon", label);
    createLabel(area, "bacon", "Bacon");
    createCheckboxInput(area, "beef", label);
    createLabel(area, "beef", "Ground Beef");
    createCheckboxInput(area, "salami", label);
    createLabel(area, "salami", "Salami");
}
function createPizzaBuilder() {
    const orderForOne = document.getElementById("onePizza");
    const orderForTwo = document.getElementById("twoPizzas");
    const orderForThree = document.getElementById("threePizzas");
    const orderName1 = document.getElementById("orderName1");
    const orderName2 = document.getElementById("orderName2");
    const orderName3 = document.getElementById("orderName3");
    const firstPizza = new Pizza("Customer 1", "size", 0, 0);
    const secondPizza = new Pizza("Customer 2", "size", 0, 0);
    const thridPizza = new Pizza("Customer 3", "size", 0, 0);
    const builderCards = document.getElementById("builderCards");
    if (orderForOne.checked) {
        const customer1 = document.createElement("h3");
        const name1 = formatName(orderName1.value, 1);
        firstPizza.orderName = name1;
        customer1.innerText = name1;
        const div1 = document.createElement("div");
        div1.classList.add("builder");
        div1.append(customer1);
        createBasePrice(div1, "size1");
        createToppingTwo(div1, "toppingTwo1");
        createToppingThree(div1, "toppingThree1");
        builderCards.append(div1);
    } else if (orderForTwo.checked) {
        const customer1 = document.createElement("h3");
        const customer2 = document.createElement("h3");
        const name1 = formatName(orderName1.value, 1);
        const name2 = formatName(orderName2.value, 2);
        //
        firstPizza.orderName = name1;
        customer1.innerText = name1;
        secondPizza.orderName = name2;
        customer2.innerText = name2; 
        //
        const div1 = document.createElement("div");
        div1.classList.add("builder");
        div1.append(customer1);
        createBasePrice(div1, "size1");
        createToppingTwo(div1, "toppingTwo1");
        createToppingThree(div1, "toppingThree1");
        builderCards.append(div1);
        //
        const div2 = document.createElement("div");
        div2.classList.add("builder");
        div2.append(customer2);
        createBasePrice(div2, "size2");
        createToppingTwo(div2, "toppingTwo2");
        createToppingThree(div2, "toppingThree2");
        builderCards.append(div2);
    } else if (orderForThree.checked) {
        const customer1 = document.createElement("h3");
        const customer2 = document.createElement("h3");
        const customer3 = document.createElement("h3");
        const name1 = formatName(orderName1.value, 1);
        const name2 = formatName(orderName2.value, 2);
        const name3 = formatName(orderName3.value, 3);
        firstPizza.orderName = name1;
        secondPizza.orderName = name2;
        thridPizza.orderName = name3;
        customer1.innerText = name1;
        customer2.innerText = name2;
        customer3.innerText = name3;
        const div1 = document.createElement("div");
        div1.classList.add("builder");
        div1.append(customer1);
        createBasePrice(div1, "size1");
        createToppingTwo(div1, "toppingTwo1");
        createToppingThree(div1, "toppingThree1");
        builderCards.append(div1);
        const div2 = document.createElement("div");
        div2.classList.add("builder");
        div2.append(customer2);
        createBasePrice(div2, "size2");
        createToppingTwo(div2, "toppingTwo2");
        createToppingThree(div2, "toppingThree2");
        builderCards.append(div2);
        const div3 = document.createElement("div");
        div3.classList.add("builder");
        div3.append(customer3);
        createBasePrice(div3, "size3");
        createToppingTwo(div3, "toppingTwo3");
        createToppingThree(div3, "toppingThree3");
        builderCards.append(div3);
    }
    else {
        window.location.reload();
    }
}
function getNumOfOrder() {
    const orderForOne = document.getElementById("onePizza");
    const orderForTwo = document.getElementById("twoPizzas");
    const orderForThree = document.getElementById("threePizzas");
    if (orderForOne.checked) {
        return 1;
    } else if (orderForTwo.checked) {
        return 2;
    } else if (orderForThree.checked) {
        return 3;
    }
}
function getPriceForSize(size) {
    let selectedSize;
    for (let i = 0; i <= size.length; i++) {
        if (size[i].checked) {
            selectedSize = size[i].id;
        }
    }
    return selectedSize;
}
function getPriceForToppingsTwo(toppings) {
    let twoDollarToppings = 0;
    for (let i = 0; i <= toppings.length; i++) {
        if (toppings[i].checked) {
            twoDollarToppings++;
        }
    }
    return twoDollarToppings;
}
function getPriceForToppingThree(toppings) {
    let threeDollarToppings = 0;
    for (let i = 0; i <= toppings.length; i++) {
        if (toppings[i].checked) {
            threeDollarToppings++;
        }
    }
    return threeDollarToppings;
}
function calculatePrice(size, toppingTwo, toppingThree) {
    const selectedSize = getPriceForSize(size);
    let priceForSize;
    const selectedToppingsTwo = getPriceForToppingsTwo(toppingTwo);
    let priceForToppingTwo;
    const selectedToppingsThree = getPriceForToppingThree(toppingThree);
    let priceForToppingThree;

    if (selectedSize === 'small') {
        priceForSize = 9;
    } else if (selectedSize === 'medium') {
        priceForSize = 12.5;
    } else if (selectedSize === 'large') {
        priceForSize = 16.25;
    } else {
        priceForSize = NaN;
    }

    priceForToppingTwo = selectedToppingsTwo * 2;
    priceForToppingThree = selectedToppingsThree * 3;
    return priceForSize + priceForToppingTwo + priceForToppingThree; 
}
function calculatePerCustomer(num) {
    const sizesOne = document.querySelectorAll('input[name="size1"]');
    const sizesTwo = document.querySelectorAll('input[name="size2"]');
    const sizesThree = document.querySelectorAll('input[name="size3"]');

    const sizeArrOne = Array.from(sizesOne);
    const sizeArrTwo = Array.from(sizesTwo);
    const sizeArrThree = Array.from(sizesThree);

    const toppingTwoOne = document.querySelectorAll('input[name="toppingTwo1"]');
    const toppingTwoTwo = document.querySelectorAll('input[name="toppingTwo2"]');
    const toppingTwoThree = document.querySelectorAll('input[name="toppingTwo3"]');

    const toppingTwoArrOne = Array.from(toppingTwoOne);
    const toppingTwoArrTwo = Array.from(toppingTwoTwo);
    const toppingTwoArrThree = Array.from(toppingTwoThree);

    const toppingThreeOne = document.querySelectorAll('input[name="toppingThree1"]');
    const toppingThreeTwo = document.querySelectorAll('input[name="toppingThree2"]');
    const toppingThreeThree = document.querySelectorAll('input[name="toppingThree3"]');

    const toppingThreeArrOne = Array.from(toppingThreeOne);
    const toppingThreeArrTwo = Array.from(toppingThreeTwo);
    const toppingThreeArrThree = Array.from(toppingThreeThree);

    if (num === 1) { 
        const priceForCustomer1 = calculatePrice(sizeArrOne, toppingTwoArrOne, toppingThreeArrOne);
        return `Price for ${firstPizza.orderName}'s pizza: ${priceForCustomer1}`;
    } else if (num === 2) {
        const priceForCustomer1 = calculatePrice(sizeArrOne, toppingTwoArrOne, toppingThreeArrOne);
        const priceForCustomer2 = calculatePrice(sizeArrTwo, toppingTwoArrTwo, toppingThreeArrTwo);
        return `Price for ${firstPizza.orderName}'s pizza: ${priceForCustomer1} \n
        Price for ${secondPizza.orderName}'s pizza: ${priceForCustomer2}`;
    } else if (num === 3) {
        const priceForCustomer1 = calculatePrice(sizeArrOne, toppingTwoArrOne, toppingThreeArrOne);
        const priceForCustomer2 = calculatePrice(sizeArrTwo, toppingTwoArrTwo, toppingThreeArrTwo);
        const priceForCustomer3 = calculatePrice(sizeArrThree, toppingTwoArrThree, toppingThreeArrThree);
        return `Price for ${firstPizza.orderName}'s pizza: ${priceForCustomer1} \n
        Price for ${secondPizza.orderName}'s pizza: ${priceForCustomer2} \n
        Price for ${thirdPizza.orderName}'s pizza: ${priceForCustomer3}`;
    }
}
function firstHandler() {
    const form = document.getElementById("orderInfo");
    form.addEventListener("submit", e => {
        e.preventDefault();
        createPizzaBuilder();
        document.getElementById("firstSection").classList.add("hidden");
        document.getElementById("secondSection").classList.remove("hidden");
    })
}
function secondHandler() {
    const form = document.getElementById("pizzaBuilder");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const numOfOrder = getNumOfOrder();
        const totalPrice = document.getElementById("totalPrice");
        totalPrice.innerText = calculatePerCustomer(numOfOrder);
        document.getElementById("secondSection").classList.add("hidden");
        document.getElementById("fourthSection").classList.remove("hidden");
    });
}
window.onload = () => {
    getOrderNumInfo();
    firstHandler();
    secondHandler();
}
