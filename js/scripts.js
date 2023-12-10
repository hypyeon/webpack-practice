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
function getNames() {
    const orderForOne = document.getElementById("onePizza");
    const orderForTwo = document.getElementById("twoPizzas");
    const orderForThree = document.getElementById("threePizzas");
    const orderName1 = document.getElementById("orderName1");
    const orderName2 = document.getElementById("orderName2");
    const orderName3 = document.getElementById("orderName3");
    const firstPizza = new Pizza("name", "size", 0, 0);
    const secondPizza = new Pizza("name", "size", 0, 0);
    const thridPizza = new Pizza("name", "size", 0, 0);
    if (orderForOne.checked) {
        const name = formatName(orderName1.value);
        firstPizza.orderName = name;
    } else if (orderForTwo.checked) {
        const name1 = formatName(orderName1.value);
        const name2 = formatName(orderName2.value);
        firstPizza.orderName = name1;
        secondPizza.orderName = name2;
    } else if (orderForThree.checked) {
        const name1 = formatName(orderName1.value);
        const name2 = formatName(orderName2.value);
        const name3 = formatName(orderName3.value);
        firstPizza.orderName = name1;
        secondPizza.orderName = name2;
        thridPizza.orderName = name3;
    }
    else {
        window.location.reload();
    }
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
function createBasePrice(area) {
    const basePriceTitle = document.createElement("h4");
    basePriceTitle.innerText = 'Base Price';
    area.appendChild(basePriceTitle);
    createRadioInput(area, "small", "size");
    createLabel(area, "small", 'S | 8" | $9.00 ');
    createRadioInput(area, "medium", "size");
    createLabel(area, "medium", 'M | 10" | $11.50 ');
    createRadioInput(area, "large", "size");
    createLabel(area, "large", 'L | 12" | $13.75 ');
}
function createToppingTwo(area) {
    const toppingTwoTitle = document.createElement("h4");
    toppingTwoTitle.innerText = '$2 Toppings';
    area.appendChild(toppingTwoTitle);
    createCheckboxInput(area, "extraCheese", "twoDollar");
    createLabel(area, "extraCheese", "Extra Cheese");
    createCheckboxInput(area, "mushroom", "twoDollar");
    createLabel(area, "mushroom", "Mushroom");
    createCheckboxInput(area, "olive", "twoDollar");
    createLabel(area, "olive", "Olive");
    createCheckboxInput(area, "pepper", "twoDollar");
    createLabel(area, "pepper", "Green Bell Pepper");
    createCheckboxInput(area, "basil", "twoDollar");
    createLabel(area, "basil", "Basil");
    createCheckboxInput(area, "jalapenos", "twoDollar");
    createLabel(area, "jalapenos", "Jalapenos");
    createCheckboxInput(area, "tomatoes", "twoDollar");
    createLabel(area, "tomatoes", "Diced Tomatoes");
    createCheckboxInput(area, "spinach", "twoDollar");
    createLabel(area, "spinach", "Spinach");
    createCheckboxInput(area, "onions", "twoDollar");
    createLabel(area, "onions", "Onions");
}
function createToppingThree(area) {
    const toppingThreeTitle = document.createElement("h4");
    toppingThreeTitle.innerText = "$3 Toppings";
    area.appendChild(toppingThreeTitle);
    createCheckboxInput(area, "pepperoni", "threeDollar");
    createLabel(area, "pepperoni", "Pepperoni");
    createCheckboxInput(area, "chicken", "threeDollar");
    createLabel(area, "chicken", "Grilled Chicken");
    createCheckboxInput(area, "bacon", "threeDollar");
    createLabel(area, "bacon", "Bacon");
    createCheckboxInput(area, "beef", "threeDollar");
    createLabel(area, "beef", "Ground Beef");
    createCheckboxInput(area, "salami", "threeDollar");
    createLabel(area, "salami", "Salami");
}
/*function firstHandler() {
    const orderInfo = document.getElementById("orderInfo");
    const 
    orderInfo.addEventListener("submit", e => {
        e.preventDefault();
        const orderName = document.getElementById("orderName").value;
    })
}*/

window.onload = () => {
    getOrderNumInfo();
}
