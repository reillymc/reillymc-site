<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { Tooltip, TooltipContent, TooltipTrigger } from "$lib/components/ui/tooltip";
	import type { Link } from "$lib/types";
	import { LinkIcon } from "@lucide/svelte";

	const { link }: { link: Link } = $props();
	const { label, href, icon: CustomLinkIcon } = link;
</script>

<a {href} target="_blank">
	<Tooltip delayDuration={300}>
		<TooltipTrigger>
			<Button size="icon" variant="outline">
				{#if CustomLinkIcon != undefined}
					<CustomLinkIcon />
				{:else}
					<LinkIcon />
				{/if}
			</Button>
		</TooltipTrigger>
		<TooltipContent>
			{label}
		</TooltipContent>
	</Tooltip>
</a>
