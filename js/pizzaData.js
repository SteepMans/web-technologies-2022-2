import { Pizza } from '../js/pizza.js'
import { PizzaSize } from '../js/pizzaSize.js'
import { Topping } from '../js/topping.js'

const pizzaSizeSmall = new PizzaSize("Маленькая", 100, 100)
const pizzaSizeBig = new PizzaSize("Большая", 200, 200)

const creamyMozzarella = new Topping("Сливочная моцарелла", [
    {
        size: pizzaSizeSmall,
        calories: 0,
        addPrice: 50
    },
    {
        size: pizzaSizeBig,
        calories: 0,
        addPrice: 100
    }
]);

const cheeseBoard = new Topping("Сырный борт", [
    {
        size: pizzaSizeSmall,
        calories: 50,
        addPrice: 150
    },
    {
        size: pizzaSizeBig,
        calories: 50,
        addPrice: 300
    }
]);

const chederAndParmezan = new Topping("Чердер и пармезан", [
    {
        size: pizzaSizeSmall,
        calories: 50,
        addPrice: 150
    },
    {
        size: pizzaSizeBig,
        calories: 50,
        addPrice: 300
    }
]);

const margatitaPizza = new Pizza
(
	"Маргарита", 
	300, 
	500, 
	pizzaSizeBig, 
	[],
);

const peperonniPizza = new Pizza
(
	"Пепперони", 
	500, 
	1000, 
	pizzaSizeBig, 
	[],
);

const bavarskiyPizza = new Pizza
(
	"Баварская", 
	500, 
	1000, 
	pizzaSizeBig, 
	[],
);

export const pizzaToppings = [creamyMozzarella, cheeseBoard, chederAndParmezan]
export const pizzaSizes = [pizzaSizeSmall, pizzaSizeBig]
export const pizzaTypes = [peperonniPizza, margatitaPizza, bavarskiyPizza]