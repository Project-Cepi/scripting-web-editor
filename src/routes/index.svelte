<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Container from '$lib/container.svelte';
	import { goto } from '$app/navigation';

	function createEditorSession() {
		goto("/editor")
	}
</script>
<Container>
	<div id="content">
		<div id="info">
			<h1>Luae Web Editor</h1>
			<p>Cepi's scripting engine's editor.</p>
		</div>
		<div id="start">
			<button on:click={createEditorSession}>Create New Script</button>
		</div>
	</div>
	<Footer />
</Container>
<style lang="scss">

	#content {
		position: absolute;
		transform: translateY(-50%);
		width: 100%;
		top: 50%;
		text-align: center;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}

	#start {
		display: flex;
  		align-items: center;
	}

	h1, p {
		color: white;
	}

	h1 {
		font-size: 5em;
	}

	p {
		font-size: 3em;
	}

	button {
		padding: 50px;
		font-size: 2em;
		border-radius: 10px;
		background: rgba(0, 0, 0, 0);
		border: white solid 2px;
		color: white;
		font-family: 'Open Sans', sans-serif;
		transition: 200ms background;
		&:hover {
			background: rgba(0, 0, 0, 0.1)
		}
	}
</style>