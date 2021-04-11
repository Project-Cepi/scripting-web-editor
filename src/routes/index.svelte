<script context="module">
	export const ssr = false;
</script>
<script lang="ts">
	import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"

	let editor = new EditorView({
		state: EditorState.create({
		extensions: [basicSetup]
	}),
		parent: document.body
	})
</script>

<style lang="scss">
	
</style>

<main>

</main>