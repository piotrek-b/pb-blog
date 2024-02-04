<script lang="ts">
	import logoDark from '$lib/images/logo_dark.svg';
	import logo from '$lib/images/logo.svg';
	import { isDarkMode } from './utils/dark-mode';

	let ms = 500;
	let visible = true;
	const toggleCursor = () => (visible = !visible);
	export let variant: string;
	let clear: ReturnType<typeof setInterval>;
	$: {
		clearInterval(clear);
		clear = setInterval(toggleCursor, ms);
	}

	const handleLogoClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>

<div>
	<button class="flex items-end" on:click={handleLogoClick}>
		<img
			data-variant={variant}
			class="transition-[0.2s] data-[variant=small]:ml-4 data-[variant=big]:h-8 data-[variant=small]:h-4 data-[variant=big]:w-8 data-[variant=small]:w-4"
			src={$isDarkMode ? logoDark : logo}
			alt="PB Logo"
		/>
		<span
			class="{visible || variant === 'small'
				? 'hidden'
				: ''} font-bold leading-none dark:text-gray-light">_</span
		>
	</button>
</div>
