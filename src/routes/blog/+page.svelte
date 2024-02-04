<script lang="ts">
	const content =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...';
	const titles = ['EventLoop', 'Closures', 'Asynchronous code', 'this and that'];

	const articles = titles.map((title, index) => ({
		content,
		title,
		index,
		date: new Date(Date.now() - 1000 * 60 * 60 * 24 * index).toDateString()
	}));
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="p-6 text-gray-dark dark:text-gray-light">
	{#each articles as article}
		<div class="mb-12">
			<h1 class="mb-2 text-2xl font-bold"><a href="/blog/{article.index}">{article.title}</a></h1>
			<h2 class="mb-6 text-xs">{article.date}</h2>
			<p class="text-justify">
				{article.content}
			</p>
		</div>
	{/each}
</div>
