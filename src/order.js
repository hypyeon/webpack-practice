// Business logic: 
export default function Order(orderName, size, firstToppings, secondToppings, method) {
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

