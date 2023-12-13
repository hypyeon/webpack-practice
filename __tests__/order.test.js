import Order from '../src/order.js';

describe('Order', () => {
    test('should correctly create an order object with five properties', () => {
        const order = new Order("Lucy", "small", ["mushroom", "onion"], ["pepperoni"], "pickup");
        expect(order.orderName).toEqual("Lucy");
        expect(order.size).toEqual("small");
        expect(order.firstToppings).toEqual(["mushroom", "onion"]);
        expect(order.secondToppings).toEqual(["pepperoni"]);
        expect(order.method).toEqual("pickup");
    });

    test('should return names of all toppings', () => {
        const order = new Order("Lucy", "small", ["mushroom", "onion"], ["pepperoni"], "pickup");
        expect(order.getToppingNames()).toEqual("mushroom, onion, pepperoni");
    });

    test('should return "none" if no topping is selected', () => {
        const order = new Order("Lucy", "small", [], [], "pickup");
        expect(order.getToppingNames()).toEqual("none");
    });

    test('should return a number with two decimals which is a sum of prices of selected pizza size, number of toppings, and delivery method', () => {
        const order = new Order("Lucy", "small", ["mushroom", "onion"], ["pepperoni"], "delivery");
        expect(order.getTotalPrice()).toEqual("16.50");
    });

    test('should apply discount of 5% when selected "pickup" for delivery method', () => {
        const order = new Order("Lucy", "small", ["mushroom", "onion"], ["pepperoni"], "pickup");
        expect(order.getTotalPrice()).toEqual("15.67");
    });

    test('should return "Yes" when "pickup" is selected as delivery method', () => {
        const order = new Order("Lucy", "small", ["mushroom", "onion"], ["pepperoni"], "pickup");
        expect(order.discountEligibility()).toEqual("Yes");
    });

    test('should return "No" when "pickup" is not selected as delivery method', () => {
        const order = new Order("Lucy", "small", ["mushroom", "onion"], ["pepperoni"], "delivery");
        expect(order.discountEligibility()).toEqual("No");
    });
});