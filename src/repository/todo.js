import api from '../services/api.js'

export const TodoRepository = {
	async getAll() {
		return await api('/todo', {
			method: 'GET',
		})
	},

	async get() {
		return await api('/todo', {
			method: 'GET',
		})
	},

	async put(values, id) {
		return await api(`/todo/${id}`, {
			method: 'PUT',
			body: JSON.stringify(values),
		})
	},

	async post(values) {
		return await api('/todo', {
			method: 'POST',
			body: JSON.stringify(values),
		})
	},

	async delete(id) {
		return await api(`/todo/${id}`, {
			method: 'DELETE',
		})
	},
}