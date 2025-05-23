<script lang="ts">
	import { AssetIcons } from "$lib/assets";
	import type { Link } from "$lib/types";
	import HamburgerButton from "./HamburgerButton.svelte";
	import NavigationButton from "./NavigationButton.svelte";

	let opened = $state(false);
	let { routes, segment }: { routes: Link[]; segment: string } = $props();
</script>

<div class="navigation-bar flex flex-col">
	<div class="flex w-full items-center justify-between">
		<a href="/">
			<img src={AssetIcons.logo} alt="logo" class="h-[34px] w-[34px]" />
		</a>
		<div class="md:hidden">
			<HamburgerButton bind:open={opened} />
		</div>
		<div class="hidden md:flex">
			{#each routes as route (route.href)}
				<NavigationButton link={route} selected={segment === route.href} />
			{/each}
		</div>
	</div>
	<div class={["collapsible-wrapper grid", opened && "open"]}>
		<div class={["mt-4 flex w-full flex-col overflow-hidden md:hidden"]}>
			{#each routes as route (route.href)}
				<NavigationButton
					link={route}
					selected={segment === route.href}
					onclick={() => (opened = false)}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.collapsible-wrapper {
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.2s cubic-bezier(0.42, 0, 0.58, 1);
	}

	.collapsible-wrapper.open {
		grid-template-rows: 1fr;
	}
</style>
