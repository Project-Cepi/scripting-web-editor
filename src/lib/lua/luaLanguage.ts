import { LezerLanguage, LanguageSupport } from "@codemirror/language"
import { parser } from "./lua.js"

const parserWithMetadata = parser.configure({
	props: []
})

export const luaLanguage = LezerLanguage.define({
	parser: parserWithMetadata,
	languageData: {
		commentTokens: {line: "--"}
	}
})

export function lua(): LanguageSupport {
	return new LanguageSupport(luaLanguage)
  }