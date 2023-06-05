import { Todo } from '../../services/todo.js'

export class TodoListItem {
  constructor(parentEl, options) {
    let { todo } = options

    this.parentEl = parentEl
    this.todo = todo

    this.el = document.createElement('div')
    this.el.className = "todo-list-item__container"

    this.button = document.createElement('button')
    this.button.innerText = 'DELETE'

    this.button = this.el.appendChild(this.button)

    this.onDelete = async () => {
      let result = await Todo.delete(this.todo.id)

      if (result.ok) {
        this.el.remove()
      }
    }

    this.button.onclick = this.onDelete

    this.checkbox = document.createElement('input')
    this.checkbox.type = 'checkbox'
    this.checkbox.onchange = async () => {
        this.button.disabled = true
        this.checkbox.disabled = true

        let result = await Todo.put(
            { ...this.todo, completed: this.checkbox.checked },
            this.todo.id
        )

        this.button.disabled = false
        this.checkbox.disabled = false

        this.todo.completed = result.data.completed
    }
  }

  setTodo(todo) {
    this.todo = todo
  }

  render() {
    this.el.innerHTML = `
    	<h6 class="todo-list-item__title">${this.todo.description}</h6>
    `

    this.checkbox.checked = this.todo.completed

    this.el.appendChild(this.checkbox)
    this.el.appendChild(this.button)

    this.parentEl.appendChild(this.el)
  }
}