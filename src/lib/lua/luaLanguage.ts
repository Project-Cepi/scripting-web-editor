import { LezerLanguage, LanguageSupport, foldNodeProp, foldInside, indentNodeProp } from "@codemirror/language"
import { parser } from "./lua.js"
import { styleTags, tags } from "@codemirror/highlight"
import { completeFromList } from "@codemirror/autocomplete"

const parserWithMetadata = parser.configure({
	props: [
		styleTags({
			Number: tags.number, 
			CompareOp: tags.compareOperator,
			Comment: tags.comment,
			Identifier: tags.variableName,
			SingleString: tags.string,
			"( )": tags.paren,
			"[ ]": tags.squareBracket,
			"{ }": tags.brace
		}),
		indentNodeProp.add({
			Application: context => context.column(context.node.from) + context.unit
		}),
		foldNodeProp.add({
			Application: foldInside
		})
	]
})

export const luaLanguage = LezerLanguage.define({
	parser: parserWithMetadata,
	languageData: {
		commentTokens: {line: "--"}
	}
})

export const luaCompletion = luaLanguage.data.of({
	autocomplete: completeFromList([
		{ label: "defun", type: "keyword" },
		{ label: "defvar", type: "keyword" },
		{ label: "let", type: "keyword" },
		{ label: "cons", type: "function" },
		{ label: "car", type: "function" },
		{ label: "cdr", type: "function" }
	])
})


export function lua(): LanguageSupport {
	return new LanguageSupport(luaLanguage, [luaCompletion])
}