import { PizzaSize } from '../js/pizzaSize.js'
import { PizzaListItem } from './PizzaListItem.js'

export class PizzaList {
	constructor(pizzaListContainer, pizzaTypes, onPizzaChange) {
		this.pizzaListContainer = pizzaListContainer
		this.pizzaTypes = pizzaTypes
		this.pizzaComponents = []

		this.pizzaTypes.forEach((pizzaType, index) => {
			let pizzaContainer = document.createElement('button')
			pizzaContainer.classList.add('pizza_list_item')

			if (index === 0)
				pizzaContainer.classList.add('pizza_list_item--active')

			this.pizzaListContainer.appendChild(pizzaContainer)

			let onPizzaClick = () => {
				onPizzaChange(pizzaType)

				this.pizzaComponents.forEach((pizzaComponent) => {
					pizzaComponent.container.classList.remove('pizza_list_item--active')
				})

				pizzaContainer.classList.add('pizza_list_item--active')
			}

			let pizzaComponent = new PizzaListItem(pizzaContainer, pizzaType, onPizzaClick)

			this.pizzaComponents.push(pizzaComponent)
		})
	}

	render() {
		this.pizzaComponents.forEach(pizzaElement => {
			pizzaElement.render()
		})

		return this.selectorContainer
	}
}
