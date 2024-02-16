<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import copy from '$lib/images/copy.svg';
	import copyDark from '$lib/images/copy_dark.svg';
	import { isDarkMode } from '$lib/stores';

	export let code: string;
	export let language: string;

	function trimNewlines(str: string) {
		return str.replace(/^[\n\r]+|[\n\r]+$/g, '');
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(codeTrimmed);
	}

	hljs.registerLanguage('javascript', javascript);

	$: codeTrimmed = trimNewlines(code);
	$: highlightedCode = hljs.highlight(codeTrimmed, {
		language
	}).value;
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
