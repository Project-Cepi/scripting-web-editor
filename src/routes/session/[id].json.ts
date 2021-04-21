import { grabSession } from '$lib/editorSession'

export async function get(request) {

	const text = await grabSession("")

	return {
		body: {
			text: text
		}
	}
}

export async function post(request) {

	return {
		body: {
			text: "test"
		}
	}

}