import { Text } from "@codemirror/state"
import uuid from 'uuid-random';

const sessionMap: Map<string, Text> = new Map();

export async function newSession(): Promise<string> {

	// generate new uuid
	const uuids = uuid()

	// set it in lookup
	sessionMap.set(uuids, Text.empty)

	// return
	return uuids
}

export async function grabSession(id: string): Promise<Text> {
	return sessionMap.get(id)
}