export class Pizza {
    constructor(name, calories, price, pizzaSize, toppings = []) {
        this.name = name;
        this.pizzaPrice = price;
        this.pizzaCalories = calories;
        this.toppings = [...toppings];
        this.pizzaSize = pizzaSize;
        this.toppingCalories = 0;
        
        toppings.map((item) => {
            this.addTopping(item);
        })

        if (pizzaSize && toppings)
            this.updateCalories();
    }

    addTopping(topping) {
        this.toppings.push(topping);
        this.toppingCalories += topping.getCalories(this.pizzaSize);
        this.pizzaPrice += topping.getPrice(this.pizzaSize);
    }

    deleteTopping(topping) {
        this.toppings = this.toppings.filter((element) => console.log(element === topping));
        this.toppingCalories -= topping.getCalories(this.pizzaSize);
        this.pizzaPrice -= topping.getPrice(this.pizzaSize);
    }

    calculateCalories() {
        return this.toppingCalories + this.pizzaCalories.calories + this.pizzaSize.calories;
    }

    calculatePrice() {
        return this.pizzaPrice + this.pizzaSize.price;
    }

    getCalories() {
        return this.pizzaCalories;
    }

    getToppings() {
        return this.toppings;
    }

    getSize() {
        return this.pizzaSize;
    }

    setSize(size) {
        this.pizzaSize = size
        this.updateCalories();
    }

    setType(pizza) {
        this.name = pizza.name;
        this.pizzaSize = pizza.getSize();
        this.pizzaPrice = pizza.pizzaPrice;
        this.toppingCalories = 0;
        
        this.updateCalories();
    }

    updateCalories() {
        this.currentCalories = 0;
        this.currentCalories = this.pizzaCalories;

        this.currentCalories += this.pizzaSize.calories;
        
        if (this.toppings.length > 0) {
            this.toppings.reduce((prev, current) => this.currentCalories += current.calories);
        }
    }
}