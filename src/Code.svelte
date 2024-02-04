<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import copy from '$lib/images/copy.svg';
	import copyDark from '$lib/images/copy_dark.svg';
	import { isDarkMode } from './utils/dark-mode';

	export let code: string;

	function removeFirstAndLastWhiteSpaceIfPresent(str: string) {
		const strSplit = str.split('\n');

		if (strSplit[0] === '') {
			strSplit.splice(0, 1);
		}

		if (strSplit[strSplit.length - 1] === '') {
			strSplit.splice(strSplit.length - 1, 1);
		}

		return strSplit.join('\n');
	}

	$: codeFixed = removeFirstAndLastWhiteSpaceIfPresent(code);

	hljs.registerLanguage('javascript', javascript);
	$: highlightedCode = hljs.highlight(codeFixed, {
		language: 'javascript'
	}).value;

	function copyToClipboard() {
		navigator.clipboard.writeText(codeFixed);
	}
</script>

<code
	class="relative my-6 box-border block w-full border-[1px] border-gray-light p-6"
	lang="javascript"
>
	<button class="absolute right-3 top-3 flex" on:click={copyToClipboard}>
		<img src={$isDarkMode ? copyDark : copy} alt="copy" />
	</button>
	<pre class="no-scrollbar overflow-x-scroll font-mono">{@html highlightedCode}</pre>
</code>
