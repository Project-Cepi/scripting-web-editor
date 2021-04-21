import { Text } from "@codemirror/state"

const sessionMap: Map<string, Text> = new Map();

function newID(): string {
	return Math.random().toString(36).substring(7);
}

export async function newSession(): Promise<string | undefined> {

	// generate new id
	let id = newID()

	let nonUniqueIterations = 0;

	// make sure there are no more IDs
	while (sessionMap.get(id) !== undefined) {
		
		// Ran out of IDs?
		if (nonUniqueIterations >= 10) {
			return undefined;
		}

		// set a new ID and increment iterations.
		id = newID()
		nonUniqueIterations++;
	}

	// set it in lookup
	sessionMap.set(id, Text.empty)

	// return
	return id
}

export async function grabSession(id: string): Promise<Text | undefined> {
	return sessionMap.get(id)
}