<script lang="ts">
	import Code from '../../../Code.svelte';

	const code = `
const x = 5;
const y = 4;

function multiply(a, b) {
	return a * b;
}

// ...

console.log(multiply(x, y)); // 20
`;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="p-6 dark:text-gray-light">
	<h3 class="mb-1">My first article</h3>
	<span class="text-xs">February 2nd, 2024</span>
	{#each [1, 2, 3, 4, 5] as num}
		<p class="text-justify">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<Code {code} />
	{/each}
</div>
