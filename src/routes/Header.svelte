<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg'
  import { browser } from '$app/environment';

	let ms = 500
	let visible = true
	const incr = () => (visible = !visible)
	let className = 'big'
 
	let clear: ReturnType<typeof setInterval>
	$: {
		clearInterval(clear)
		clear = setInterval(incr, ms)
	}

	if (browser) {

		window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    className = 'small'
  } else {
    className = 'big'
  }
}
	}
</script>

<header class="{className}">
	<div>
		<div class="corner">
			<a on:click="{() => window.scrollTo({top: 0, behavior: 'smooth'})}">
				<!-- #4c4c4c -->
				<img src={logo} alt="SvelteKit" />
				<span style="display:{visible && className !== 'small' ? '': 'none'}; font-weight: bold;">_</span>
			</a>
		</div>
		<nav>
			<a style="margin-right: 12px">Posts</a>
			<a style="margin-right: 12px">About</a>
			<a>EN</a>
		</nav>
	</div>
</header>

<style>
	header {
		transition: 0.2s;
		position: fixed;
		background: white;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	header.big {

		border-bottom: 1px solid rgb(229, 229, 229);
	}

	header.small {

		border-bottom: 2px solid rgb(229, 229, 229);
	}

	header.big img {
		width: 2em;
		height: 2em;
		transition: 0.2s;
	}

	header.big > div {
			padding: 24px;
		transition: 0.2s;
	}

	header.small img {
		width: 1em;
		height: 1em;
		margin-left: 12px;
		transition: 0.2s;
	}
	header.small > div {
			padding: 12px;
		transition: 0.2s;
	}
	header > div {
		display: flex;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		width: 100%;
		max-width: 48em;
	}

	.corner a {
		display: flex;
		align-items: flex-end;
		width: 100%;
		height: 100%;
		color: #4c4c4c;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		font-family: monospace;
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
