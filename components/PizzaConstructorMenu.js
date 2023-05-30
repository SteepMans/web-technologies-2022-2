import { PizzaSizeSelector } from './PizzaSizeSelector.js'
import { Pizza } from '../js/pizza.js'
import { PizzaList } from './PizzaList.js'
import { PizzaToppingList } from './PizzaToppingList.js'

export class PizzaConstructorMenu {
	constructor(pizzaTypes, pizzaToppings, pizzaSizes) {
		this.pizzaTypes = pizzaTypes
		this.pizzaToppings = pizzaToppings
		this.pizzaSizes = pizzaSizes

		this.constructedPizza = new Pizza(pizzaTypes[0].name, pizzaTypes[0].pizzaCalories, pizzaTypes[0].pizzaPrice, pizzaTypes[0].pizzaSize)

		this.addToCartButton = document.getElementsByClassName('add_to_cart')[0]

		this.setTotalPrice = (price, calories) => {
			this.addToCartButton.textContent = `Добавить в корзину за ${price} (${calories} кКал)`
		}

		this.onSizeChange = (newPizzaSize) => {
			this.constructedPizza.setSize(newPizzaSize)
			this.setTotalPrice(
				this.constructedPizza.calculatePrice(),
				this.constructedPizza.calculateCalories()
			)
		}

		this.onPizzaTypeChange = (newPizzaType) => {
			this.constructedPizza.setType(newPizzaType)
			this.setTotalPrice(
				this.constructedPizza.calculatePrice(),
				this.constructedPizza.calculateCalories()
			)
		}

		this.onPizzaToppingSelect = (newPizzaTopping) => {
			if (this.constructedPizza.getToppings().includes(newPizzaTopping)) {
				this.constructedPizza.deleteTopping(newPizzaTopping)
			} else {
				this.constructedPizza.addTopping(newPizzaTopping)
			}

			this.setTotalPrice(
				this.constructedPizza.calculatePrice(),
				this.constructedPizza.calculateCalories()
			)
		}

		let pizzaSizeSelectorElement = document.getElementsByClassName(
			'pizza_size_selector'
		)[0]

		this.pizzaSizeSelector = new PizzaSizeSelector(
			pizzaSizeSelectorElement,
			pizzaSizes,
			this.onSizeChange
		)

		let pizzaListElementContainer =
			document.getElementsByClassName('pizza_list')[0]

		this.pizzasListComponent = new PizzaList(
			pizzaListElementContainer,
			pizzaTypes,
			this.onPizzaTypeChange
		)

		let pizzaToppingListComponentContainer = document.getElementsByClassName(
			'pizza_topping_selector'
		)[0]

		this.pizzaToppingListComponent = new PizzaToppingList(
			pizzaToppingListComponentContainer,
			pizzaToppings,
			this.onPizzaToppingSelect
		)

		this.pizzaSizeSelector.render()
		this.pizzasListComponent.render()
		this.pizzaToppingListComponent.render()
	}
}
