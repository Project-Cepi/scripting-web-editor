import { grabSession } from '$lib/editorSession'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async function ({ params }) {

	const { slug } = params;

	const text = await grabSession(slug)

	if (text === undefined) {
		return {
			status: 404,
			body: {
				error: `ID ${slug} not found.`
			}
		}
	}

	return {
		body: {
			text: [...text]
		}
	}
}

export const post: RequestHandler = async function() {

	return {
		body: {
			text: "test"
		}
	}

}