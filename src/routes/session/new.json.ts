import { newSession } from '$lib/_editorSession.ts'

export async function post(request) {

	const sessionUUID = await newSession();

	return {
		body: {
			id: sessionUUID
		}
	}
}