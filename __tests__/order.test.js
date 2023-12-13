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
});