export class Posts {
	#el = null
	#post = null
	#postComments = null
	#getComments = null
	#getPost = null
	#postId = null

	constructor(el, args) {
		let { getPost, getComments } = args
		
        this.#el = el
		this.#getPost = getPost
		this.#getComments = getComments
	}

	async init() {
        const url = new URL(window.location.href);
        this.#postId = +url.searchParams.get('post');

        await this.load()
	}

	async load() {
		try {
			let post = await this.#getPost(this.#postId)
			let postComments = await this.#getComments(this.#postId)

            if (Object.keys(post).length === 0)
			    document.location.href = "/error.html"

			this.#post = post
			this.#postComments = postComments

			this.renderPost()
		} catch (error) {
			document.location.href = "/error.html"
		}
	}

	renderPost() {
        this.#el.innerHTML = `
			<h3>${this.#post.title}</h3>
			<div>${this.#post.body}</div>
			<br/>
			${this.renderComments()}
    `
	}

	renderComment(comment) {
		return `
			<div>
				<h5>${comment.name}</h5>
				<p>${comment.body}</p>
			</div>
			<hr/>
		`
	}

	renderComments() {
		return `
			<h3>Comments</h3>
			<div>
				${this.#postComments.map((comment) => this.renderComment(comment)).join(' ')}
			</div>
		`
	}
}