<script context="module">
	export const ssr = false;
</script>
<script lang="ts">
	import { EditorView } from '@codemirror/view'
	import { state } from '$lib/_editorState'

	import { onMount } from 'svelte';

	let editorParent: Element;

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