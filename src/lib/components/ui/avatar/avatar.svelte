<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { Avatar as AvatarPrimitive } from "bits-ui";

	let {
		ref = $bindable(null),
		variant,
		class: className,
		...restProps
	}: AvatarPrimitive.RootProps & { variant?: "square" } = $props();
</script>

<AvatarPrimitive.Root
	bind:ref
	data-slot="avatar"
	class={cn(
		`relative flex size-8 shrink-0 overflow-hidden rounded-${variant === "square" ? "md" : "full"}`,
		className,
	)}
	{...restProps}
/>
