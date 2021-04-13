<script context="module">
	export const ssr = false;
</script>
<script lang="ts">
	import { state } from '$lib/_editorState'

	import { onMount } from 'svelte';
	import { EditorView } from '@codemirror/view'

	let editorParent;

	onMount(() => {

		const editor = new EditorView({ 
			state,
			parent: editorParent
		})

	})
</script>

<main>
	<div id="editor" bind:this={editorParent}></div>
</main>