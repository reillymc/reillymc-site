<script lang="ts">
	import type { Image } from "$lib/data/projects";

	const { image }: { image: Image } = $props();
</script>

<img src={image.src} alt={image.caption} class="h-[25w] rounded-xl border object-cover shadow-sm" />
