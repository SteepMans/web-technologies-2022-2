import { TodoRepository } from '../repository/todo.js'

export class Todo {
	static async getAll() {
		return await TodoRepository.getAll()
	}

	static async get(todoId) {
		return await TodoRepository.get(todoId)
	}

	static async put(values, todoId) {
		return await TodoRepository.put(values, todoId)
	}

	static async post(values) {
		return await TodoRepository.post(values)
	}

	static async delete(todoId) {
		return await TodoRepository.delete(todoId)
	}
}