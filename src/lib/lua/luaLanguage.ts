import { LezerLanguage, LanguageSupport, foldNodeProp, foldInside, indentNodeProp } from "@codemirror/language"
import { parser } from "./lua.js"
import { styleTags, tags } from "@codemirror/highlight"
import { completeFromList } from "@codemirror/autocomplete"
import { luaParserLinter } from "./luaLint";
import { linter } from "@codemirror/lint"
import type { Extension } from "@codemirror/state";

const parserWithMetadata = parser.configure({
	props: [
		styleTags({
			Number: tags.number, 
			CompareOp: tags.compareOperator,
			"not": tags.operatorKeyword,
			Comment: tags.comment,
			"for while if elseif else then end": tags.controlKeyword,
			"local function": tags.definitionKeyword,
			"true false": tags.bool,
			Identifier: tags.variableName,
			SingleString: tags.string,
			Ellipsis: tags.punctuation,
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
		{ label: "not", type: "keyword" },
		{ label: "for", type: "keyword" },
		{ label: "while", type: "keyword" },
		{ label: "else", type: "keyword" },
		{ label: "elseif", type: "keyword" },
		{ label: "else", type: "keyword" },
		{ label: "then", type: "keyword" },
		{ label: "end", type: "keyword" },
		{ label: "function", type: "keyword" },
		{ label: "local", type: "keyword" }
	])
})


export function lua(): LanguageSupport {
	return new LanguageSupport(luaLanguage, [luaCompletion])
}

export function luaLinter(): Extension {
	return linter(luaParserLinter());
}