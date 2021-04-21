import { newSession } from '$lib/editorSession'

export async function post(request) {

	const sessionID = await newSession();

	return {
		body: {
			id: sessionID
		}
	}
}