import { grabSession } from '$lib/_editorSession'

export async function get(request) {

	const text = await grabSession("")

	return {
		body: {
			text: text
		}
	}
}