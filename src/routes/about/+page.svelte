<script>
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import aboutMe from "$lib/data/aboutMe.md?raw";
	import { Details } from "$lib/data/details";
	import { mySkills } from "$lib/data/skills";
	import Markdown from "@magidoc/plugin-svelte-marked";
</script>

<svelte:head>
	<title>About | {Details.fullName}</title>
</svelte:head>

<div>
	<main>
		<h1>About</h1>
		<Markdown source={aboutMe} />
		<Separator class="mt-4" />
		{#each mySkills as skillGroup (skillGroup.name)}
			<h2>{skillGroup.name}</h2>
			{#if skillGroup.description}
				<p>{skillGroup.description}</p>
			{/if}
			<ul class="grid grid-cols-2 gap-4 text-center md:grid-cols-3 xl:grid-cols-4">
				{#each skillGroup.skills as { name, icon } ({ name })}
					<li>
						<div class="m-4 flex flex-col items-center gap-2">
							<img src={icon} alt={name} height="40" width="40" />
							{name}
						</div>
					</li>
				{/each}
			</ul>
		{/each}
	</main>
</div>
