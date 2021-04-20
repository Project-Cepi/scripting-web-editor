<script context="module" lang="ts">
	export const ssr = false;

	let editor;

	export function grabEditor(): EditorState {
		return editor;
	}
</script>
<script lang="ts">
	import { keymap, highlightSpecialChars, drawSelection, highlightActiveLine } from "@codemirror/view"
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
	import { EditorView } from '@codemirror/view'
	// import { lua } from "@codemirror/legacy-modes/mode/lua"

	import { onMount } from 'svelte';

	let editorParent: Element;

	const state = EditorState.create({
		extensions: [
			// StreamLanguage.define(lua),
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
	})

	onMount(() => {
		editor = new EditorView({ 
			state,
			parent: editorParent
		})
	})
</script>
<main>
	<div id="editor" bind:this={editorParent}></div>
</main>