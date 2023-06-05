import { Posts } from "./src/components/posts.js"

const getPost = async (postId) => {
    let data = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	)

    return data.json()
}

const getComments = async (postId) => {
	let data = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
	)

    return data.json()
}

const init = () => {
    const posts = document.getElementById('post')
    new Posts(posts, { 
        getPost: getPost,
        getComments: getComments
     }).init()
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}
