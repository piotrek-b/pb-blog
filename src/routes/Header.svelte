<script lang="ts">
	import { page } from '$app/stores';
	import logoDark from '$lib/images/logo_dark.svg';
	import logo from '$lib/images/logo.svg';
	import { browser } from '$app/environment';

	let ms = 500;
	let visible = true;
	const incr = () => (visible = !visible);
	let variant = 'big';

	let clear: ReturnType<typeof setInterval>;
	$: {
		clearInterval(clear);
		clear = setInterval(incr, ms);
	}

	if (browser) {
		window.onscroll = function () {
			scrollFunction();
		};

		function scrollFunction() {
			if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
				variant = 'small';
			} else {
				variant = 'big';
			}
		}
	}

	const handleLogoClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>

<header
	data-variant={variant}
	class="light:data-[variant=small]:border-y-[2px] light:data-[variant=big]:border-y-[1px] fixed z-50 flex w-full justify-center border-solid border-gray-light bg-white transition-[2000] dark:bg-gray-dark dark:text-gray-light"
>
	<div
		data-variant={variant}
		class="box-border flex w-full max-w-[48rem] justify-between transition-[2000] data-[variant=big]:p-6 data-[variant=small]:p-3"
	>
		<div>
			<a class="flex items-end" href="." aria-roledescription="logo" on:click={handleLogoClick}>
				<!-- #4c4c4c -->
				<img
					data-variant={variant}
					class="light:hidden transition-[2000] data-[variant=small]:ml-4 data-[variant=big]:h-8 data-[variant=small]:h-4 data-[variant=big]:w-8 data-[variant=small]:w-4"
					src={logoDark}
					alt="SvelteKit"
				/>
				<img
					data-variant={variant}
					class="transition-[2000] data-[variant=small]:ml-4 data-[variant=big]:h-8 data-[variant=small]:h-4 data-[variant=big]:w-8 data-[variant=small]:w-4 dark:hidden"
					src={logo}
					alt="SvelteKit"
				/>
				<span
					class="{visible || variant === 'small' ? 'hidden' : ''} leading-none dark:text-gray-light"
					>_</span
				>
			</a>
		</div>
		<nav class="flex justify-center font-mono">
			<a href="/blog" class="flex items-center mr-3 px-2 py-0 uppercase font-bold tracking-widest text-sm">Posts</a>
			<a href="/blog" class="flex items-center mr-3 px-2 py-0 uppercase font-bold tracking-widest text-sm">About</a>
			<p class="flex items-center px-2 py-0 uppercase font-bold tracking-widest text-sm">EN</p>
		</nav>
	</div>
</header>
