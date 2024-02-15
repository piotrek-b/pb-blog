import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';

const getScrollData = () => {
	let lastScrollTop = 0;
	const scrollTop = writable(0);
	const isScrollingDown = writable(false);

	if (browser) {
		window.onscroll = scrollFunction;
	}

	function scrollFunction() {
		const st = document.body.scrollTop || document.documentElement.scrollTop;

		scrollTop.update(() => st);
		isScrollingDown.update(() => st > lastScrollTop);

		lastScrollTop = st;
	}

	return derived([scrollTop, isScrollingDown], ([$scrollTop, $isScrollingDown]) => {
		return {
			top: $scrollTop,
			wasDown: $isScrollingDown
		};
	});
};

export const scrollData = getScrollData();
