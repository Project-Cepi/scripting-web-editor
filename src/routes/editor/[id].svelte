<script lang="ts">
	import { EditorView } from '@codemirror/view'
	import { state } from '$lib/_editorState'

	import { onMount } from 'svelte';

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