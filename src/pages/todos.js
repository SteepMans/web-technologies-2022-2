import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";

import { TodoList } from '../components/Todo/List.js'
import { Todo } from '../services/todo.js'

import { Form } from '../components/form.js'

const init = async () => {
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }

    let todo = await Todo.getAll();

	const todoList = new TodoList(document.getElementById('todo-list'), todo.data)
	todoList.render()

	new Form(document.getElementById('todo-form'),
		{
			description: (value) => {
				if (value.length < 6) {
					return 'Значение должно быть больше или равно 6'
				} else if (value.length >= 32) {
					return 'Значение должно быть меньше 32'
				}

				return false
			},
		},

		async (values) => {
			await Todo.post(values)
            let todos = await Todo.getAll();

            todoList.setTodos(todos.data)
            todoList.render()
		}
	)

    // create POST /todo { description: string }
    // get get /todo/1 - 1 это id
    // getAll get /todo
    // update put /todo/1 - 1 это id { description: string }
    // delete delete /todo/1 - 1 это id
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}
