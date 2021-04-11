<script context="module">
	export const ssr = false;
</script>
<script lang="ts">
	import { EditorState, basicSetup } from "@codemirror/basic-setup"
	import { EditorView, keymap } from "@codemirror/view"
	import { defaultTabBinding } from "@codemirror/commands"

	let editor = new EditorView({
		state: EditorState.create({
			extensions: [
				basicSetup,
				keymap.of([defaultTabBinding]),
			],
		}),
		parent: document.body
	})
</script>

<style lang="scss">

</style>

<main>

</main>