<script context="module">
	export const ssr = false;
</script>
<script lang="ts">
	import Editor, { grabEditor } from '$lib/Editor.svelte'

	import { onMount } from 'svelte';

	onMount(() => {
		const editor = grabEditor();
	})

</script>
<style lang="scss">
	:global(.cm-content, .cm-gutter) { min-height: calc(100vh - 2px); }
	:global(.cm-gutters) { margin: 1px; }
	:global(.cm-scroller) { overflow: auto; }
</style>
<Editor>

</Editor>