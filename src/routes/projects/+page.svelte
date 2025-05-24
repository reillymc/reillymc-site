<script>
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { Details } from "$lib/data/details";
	import { myProjects } from "$lib/data/projects";
</script>

<svelte:head>
	<title>Projects | {Details.fullName}</title>
</svelte:head>

<div class="flex flex-1 flex-col gap-8">
	<main>
		<h1>Projects</h1>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
			{#each myProjects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</main>
</div>
