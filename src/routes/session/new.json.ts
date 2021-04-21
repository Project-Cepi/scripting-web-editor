import { newSession } from '$lib/editorSession'
import type { RequestHandler } from '@sveltejs/kit'

export const post: RequestHandler = async function() {

	const sessionID = await newSession();

	return {
		body: {
			id: sessionID
		}
	}
}