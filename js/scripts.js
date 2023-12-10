function Pizza(orderName, size, toppingsTwo, toppingsThree) {
    this.orderName = orderName;
    this.size = size;
    this.toppingsTwo = toppingsTwo;
    this.toppingsThree = toppingsThree;
}
function formatName(name) {
    if (name !== '') {
        return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    } else {
        return "Player";
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
    createLabel(area, "medium", 'Medium (10"): $11.50');
    createRadioInput(area, "large", label);
    createLabel(area, "large", 'Large (12"): $13.75');
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
    const nameForOrder = document.createElement("h3");
    if (orderForOne.checked) {
        const name = formatName(orderName1.value);
        firstPizza.orderName = name;
        builderCards.append(nameForOrder);
        nameForOrder.innerText = firstPizza.orderName;
        const div1 = document.createElement("div");
        div1.classList.add("builder");
        createBasePrice(div1, "size1");
        createToppingTwo(div1, "toppingTwo1");
        createToppingThree(div1, "toppingThree1");
        builderCards.append(div1);
    } else if (orderForTwo.checked) {
        const name1 = formatName(orderName1.value);
        const name2 = formatName(orderName2.value);
        firstPizza.orderName = name1;
        secondPizza.orderName = name2;
        const div1 = document.createElement("div");
        div1.classList.add("builder");
        createBasePrice(div1, "size1");
        createToppingTwo(div1, "toppingTwo1");
        createToppingThree(div1, "toppingThree1");
        builderCards.append(div1);
        const div2 = document.createElement("div");
        div2.classList.add("builder");
        createBasePrice(div2, "size2");
        createToppingTwo(div2, "toppingTwo2");
        createToppingThree(div2, "toppingThree2");
        builderCards.append(div2);
    } else if (orderForThree.checked) {
        const name1 = formatName(orderName1.value);
        const name2 = formatName(orderName2.value);
        const name3 = formatName(orderName3.value);
        firstPizza.orderName = name1;
        secondPizza.orderName = name2;
        thridPizza.orderName = name3;
        const div1 = document.createElement("div");
        div1.classList.add("builder");
        createBasePrice(div1, "size1");
        createToppingTwo(div1, "toppingTwo1");
        createToppingThree(div1, "toppingThree1");
        builderCards.append(div1);
        const div2 = document.createElement("div");
        div2.classList.add("builder");
        createBasePrice(div2, "size2");
        createToppingTwo(div2, "toppingTwo2");
        createToppingThree(div2, "toppingThree2");
        builderCards.append(div2);
        const div3 = document.createElement("div");
        div3.classList.add("builder");
        createBasePrice(div3, "size3");
        createToppingTwo(div3, "toppingTwo3");
        createToppingThree(div3, "toppingThree3");
        builderCards.append(div3);
    }
    else {
        window.location.reload();
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
window.onload = () => {
    getOrderNumInfo();
    firstHandler();
}
