export class Topping {
    constructor(name, toppingInfo, image) {
        this.name = name;
        this.toppingInfo = toppingInfo;
        this.image = image;
    }

    getCalories(pizzaSize) {
        const toppingInfo = this.toppingInfo.find(element => element.size.name === pizzaSize.name)

        if (!toppingInfo)
            return 0;

        return toppingInfo.calories;
    }

    getPrice(pizzaSize) {
        const toppingInfo = this.toppingInfo.find(element => element.size.name === pizzaSize.name)

        if (!toppingInfo)
            return 0;

        return toppingInfo.addPrice;
    }
}