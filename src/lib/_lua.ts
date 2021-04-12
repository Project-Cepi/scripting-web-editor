import { parser } from "./_lua_auto.js"
import { foldNodeProp, foldInside, indentNodeProp, LezerLanguage, LanguageSupport } from "@codemirror/language"
import { styleTags, tags } from "@codemirror/highlight"
import { completeFromList } from "@codemirror/autocomplete"

const luaWithMetadata = parser.configure({
	props: [
		styleTags({
			Identifier: tags.variableName,
			Boolean: tags.bool,
			String: tags.string,
			LineComment: tags.lineComment,
			"( )": tags.paren
		}),
		indentNodeProp.add({
			Application: context => context.column(context.node.from) + context.unit
		}),
		foldNodeProp.add({
			Application: foldInside
		})
	]
})

const luaLanguage = LezerLanguage.define({
	parser: luaWithMetadata,
	languageData: {
		commentTokens: {line: "--"}
	}
})

const luaCompletion = luaLanguage.data.of({
	autocomplete: completeFromList([
		
	])
})

export default function(): LanguageSupport {
	return new LanguageSupport(luaLanguage, [luaCompletion])
}