<script lang="ts">
	import type { Link } from "$lib/types";

	let { link, selected, onclick }: { link: Link; selected: boolean; onclick?: () => void } =
		$props();
</script>

<a
	{onclick}
	class={[`navigation-button m-4 text-center font-bold text-gray-500`, { selected }]}
	href={link.href}>{link.label}</a
>

<style>
	.navigation-button {
		transition: all 0.2s ease-in-out;
		text-decoration: underline;
		text-decoration-style: solid;
		text-decoration-thickness: 2px;
	}

	.navigation-button.selected {
		color: var(--primary);
		text-decoration-color: var(--primary);
	}
</style>
