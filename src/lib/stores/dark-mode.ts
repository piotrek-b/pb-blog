import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';

const getDarkMode = () => {
	const isDarkMode = writable<boolean | undefined>(undefined);
	const darkModeQuery = browser ? window.matchMedia('(prefers-color-scheme: dark)') : null;

	if (darkModeQuery) {
		isDarkMode.update(() => darkModeQuery.matches);
		darkModeQuery.addEventListener('change', (ev) => {
			isDarkMode.update(() => ev.matches);
		});
	}

	return derived(isDarkMode, ($isDarkMode) => $isDarkMode);
};

export const isDarkMode = getDarkMode();
