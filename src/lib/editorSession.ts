import { Text } from "@codemirror/state"

const sessionMap: Map<string, Text> = new Map();

function newID(): string {
	return Math.random().toString(36).substring(7);
}

export async function newSession(): Promise<string> {

	// generate new id
	const id = newID()

	// set it in lookup
	sessionMap.set(id, Text.empty)

	// return
	return id
}

export async function grabSession(id: string): Promise<Text | undefined> {
	return sessionMap.get(id)
}