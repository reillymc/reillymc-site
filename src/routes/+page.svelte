<script>
	import { Details } from "$lib/data/details";
</script>

<svelte:head>
	<title>{Details.fullName}</title>
</svelte:head>

<main class="flex flex-1 flex-col items-center justify-center text-center">
	<h1>👋 Hello! I'm {Details.firstName}</h1>
	<h2>{Details.jobTitle}</h2>
	<div class="icons mt-4 flex gap-8">
		{#each Details.links as { label, icon: LinkIcon, href } ({ href })}
			<a {href} aria-label={label} target="_blank" rel="noopener noreferrer">
				<LinkIcon />
			</a>
		{/each}
	</div>
</main>
