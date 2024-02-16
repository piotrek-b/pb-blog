<script>
	import Header from './Header.svelte';
	import { isDarkMode } from '$lib/stores';
	import '../app.css';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/stackoverflow-{$isDarkMode
			? 'dark'
			: 'light'}.min.css"
	/>
</svelte:head>

<div class="flex min-h-24 flex-col items-center dark:bg-gray-dark">
	<Header />
	<div class="flex min-h-24 w-full flex-col items-center">
		<main
			class="mb-0 ml-auto mr-auto mt-0 box-border flex w-full max-w-[48rem] flex-1 flex-col pt-20 font-mono"
		>
			<slot />
		</main>
	</div>
	<footer
		class="light:border-y-[1px] flex w-full flex-col items-center justify-center border-solid border-gray-light p-3 font-mono dark:text-gray-light"
	>
		PB, 2024
	</footer>
</div>
