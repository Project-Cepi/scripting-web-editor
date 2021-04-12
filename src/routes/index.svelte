<script context="module">
	export const ssr = false;
</script>
<script lang="ts">
	import { keymap, highlightSpecialChars, drawSelection, highlightActiveLine, EditorView  } from "@codemirror/view"
	import { EditorState } from "@codemirror/state"
	import { history, historyKeymap } from "@codemirror/history"
	import { foldGutter, foldKeymap } from "@codemirror/fold"
	import { indentOnInput } from "@codemirror/language"
	import { lineNumbers } from "@codemirror/gutter"
	import { defaultKeymap, defaultTabBinding  } from "@codemirror/commands"
	import { bracketMatching } from "@codemirror/matchbrackets"
	import { closeBrackets, closeBracketsKeymap } from "@codemirror/closebrackets"
	import { searchKeymap, highlightSelectionMatches } from "@codemirror/search"
	import { autocompletion, completionKeymap } from "@codemirror/autocomplete"
	import { commentKeymap } from "@codemirror/comment"
	import { rectangularSelection } from "@codemirror/rectangular-selection"
	import { defaultHighlightStyle } from "@codemirror/highlight"
	import { lintKeymap } from "@codemirror/lint"
	import { StreamLanguage } from "@codemirror/stream-parser"
	import { lua } from "@codemirror/legacy-modes/mode/lua"


	let editor = new EditorView({ 
		state: EditorState.create({
			extensions: [
				StreamLanguage.define(lua),
				lineNumbers(),
				highlightSpecialChars(),
				history(),
				foldGutter(),
				drawSelection(),
				EditorState.allowMultipleSelections.of(true),
				indentOnInput(),
				defaultHighlightStyle.fallback,
				bracketMatching(),
				closeBrackets(),
				autocompletion(),
				rectangularSelection(),
				highlightActiveLine(),
				highlightSelectionMatches(),
				keymap.of([
				...closeBracketsKeymap,
				...defaultKeymap,
				...searchKeymap,
				...historyKeymap,
				...foldKeymap,
				...commentKeymap,
				...completionKeymap,
				...lintKeymap,
				defaultTabBinding
				])
			],
		}),
		parent: document.body
	})
</script>

<style lang="scss">

</style>

<main>

</main>