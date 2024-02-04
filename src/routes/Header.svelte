<script lang="ts">
	import { browser } from '$app/environment';
	import Logo from '../Logo.svelte';

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
</script>

<header
	data-variant={variant}
	class="light:data-[variant=small]:border-y-[2px] light:data-[variant=big]:border-y-[1px] fixed z-50 flex w-full justify-center border-solid border-gray-light bg-white transition-[2000] dark:bg-gray-dark dark:text-gray-light"
>
	<div
		data-variant={variant}
		class="box-border flex w-full max-w-[48rem] justify-between transition-[0.2s] data-[variant=big]:p-6 data-[variant=small]:p-3"
	>
		<Logo {variant} />
		<nav class="flex justify-center font-mono">
			<a
				href="/blog"
				class="mr-3 flex items-center px-2 py-0 text-sm font-bold uppercase tracking-widest"
				>Posts</a
			>
			<a
				href="/blog"
				class="mr-3 flex items-center px-2 py-0 text-sm font-bold uppercase tracking-widest"
				>About</a
			>
			<p class="flex items-center px-2 py-0 text-sm font-bold uppercase tracking-widest">EN</p>
		</nav>
	</div>
</header>
