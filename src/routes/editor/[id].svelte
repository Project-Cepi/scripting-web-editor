<script context="module">
	export const ssr = false;
</script>
<script lang="ts">
	import { EditorView } from '@codemirror/view'
	import Editor from '$lib/Editor.svelte'

	import { onMount } from 'svelte';

	let editorParent: Element;

	onMount(() => {

	})
</script>
<Editor>

</Editor>