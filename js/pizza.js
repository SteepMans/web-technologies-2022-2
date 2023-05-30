export class Pizza {
    constructor(name, calories, price, pizzaSize, toppings = [], image = "") {
        this.name = name;
        this.startPrice = price;
        this.pizzaPrice = price;
        this.pizzaCalories = calories;
        this.toppings = [...toppings];
        this.pizzaSize = pizzaSize;
        this.toppingCalories = 0;
        this.image = image;
        
        toppings.map((item) => {
            this.addTopping(item);
        })

        if (pizzaSize && toppings)
            this.calculate();
    }

    addTopping(topping) {
        this.toppings.push(topping);
        this.toppingCalories += topping.getCalories(this.pizzaSize);
        this.pizzaPrice += topping.getPrice(this.pizzaSize);
    }

    deleteTopping(topping) {
        this.toppings = this.toppings.filter((element) => element !== topping);
        this.toppingCalories -= topping.getCalories(this.pizzaSize);
        this.pizzaPrice -= topping.getPrice(this.pizzaSize);
    }

    calculateCalories() {
        return this.toppingCalories + this.pizzaCalories + this.pizzaSize.calories;
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
        this.calculate();
    }

    setType(pizza) {
        this.name = pizza.name;
        this.pizzaPrice = pizza.pizzaPrice;
        this.startPrice = pizza.startPrice;
       
        this.calculate();
    }

    calculate() {
        this.toppingCalories = 0;
        this.pizzaPrice = this.startPrice;

        for (var item of this.toppings) {
            this.toppingCalories += item.getCalories(this.pizzaSize);
            this.pizzaPrice += item.getPrice(this.pizzaSize);
        }
    }
}