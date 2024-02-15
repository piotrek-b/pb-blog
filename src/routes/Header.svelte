<script lang="ts">
	import Logo from '../Logo.svelte';
	import { scrollData } from '../utils/scroll-top';

	let variant = 'big';
	let hidden = false;

	scrollData.subscribe(($scrollData) => {
		variant = $scrollData.top > 30 ? 'small' : 'big';
		hidden = $scrollData.top > 30 && $scrollData.wasDown;
	});
</script>

<header
	data-variant={variant}
	data-hidden={hidden}
	class="light:data-[variant=small]:border-y-[2px] light:data-[variant=big]:border-y-[1px] fixed z-50 flex w-full justify-center border-solid border-gray-light bg-white duration-500 data-[hidden=true]:translate-y-[-100px] dark:bg-gray-dark dark:text-gray-light"
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
				href="/about"
				class="mr-3 flex items-center px-2 py-0 text-sm font-bold uppercase tracking-widest"
				>About</a
			>
			<p class="flex items-center px-2 py-0 text-sm font-bold uppercase tracking-widest">EN</p>
		</nav>
	</div>
</header>
