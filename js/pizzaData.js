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
	],
	"images/halapenjo.png"	
);

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
	],
	"images/cheese_bort.png"
);

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
	],
	"images/cheese.png"
);

const margatitaPizza = new Pizza
(
	"Маргарита", 
	300, 
	500, 
	pizzaSizeSmall, 
	[],
	"images/margaritta.jpeg"
);

const peperonniPizza = new Pizza
(
	"Пепперони", 
	500, 
	1000, 
	pizzaSizeSmall, 
	[],
	"images/pepperoni.jpeg"
);

const bavarskiyPizza = new Pizza
(
	"Баварская", 
	500, 
	1000, 
	pizzaSizeSmall, 
	[],
	"images/bavarskaya.jpeg"
);

export const pizzaToppings = [creamyMozzarella, cheeseBoard, chederAndParmezan]
export const pizzaSizes = [pizzaSizeSmall, pizzaSizeBig]
export const pizzaTypes = [peperonniPizza, margatitaPizza, bavarskiyPizza]