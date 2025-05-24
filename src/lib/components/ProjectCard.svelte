<script lang="ts">
	import { ProjectIcons } from "$lib/assets";
	import type { Project } from "$lib/data/projects";
	import ButtonLink from "./ButtonLink.svelte";
	import SkillBadge from "./SkillBadge.svelte";
	import { AvatarFallback } from "./ui/avatar";
	import AvatarImage from "./ui/avatar/avatar-image.svelte";
	import Avatar from "./ui/avatar/avatar.svelte";
	import { CardHeader } from "./ui/card";
	import CardContent from "./ui/card/card-content.svelte";
	import CardTitle from "./ui/card/card-title.svelte";
	import Card from "./ui/card/card.svelte";
	import Separator from "./ui/separator/separator.svelte";

	const { project }: { project: Project } = $props();
</script>

<Card>
	<CardHeader class="flex w-full flex-col gap-4">
		<Avatar variant="square">
			<AvatarFallback>
				<img src={ProjectIcons.portfolioWebsite} alt={project.name} />
			</AvatarFallback>
			<AvatarImage src={project.logo} />
		</Avatar>
		<div class="flex w-full flex-row items-center gap-1 overflow-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 ">
				{project.name}
			</CardTitle>

			{#each project.links as link (link.href)}
				<ButtonLink {link} />
			{/each}
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<p class="flex flex-row items-center gap-2 italic">
			{project.type}
		</p>
		<p class="py-4 md:min-h-[120px] md:py-2">{project.description}</p>
		<Separator />
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each project.skills as skill (skill.name)}
				<SkillBadge {skill} />
			{/each}
		</div>
	</CardContent>
	<!-- <CardFooter>
		<Button href={`/projects/${project.slug}`}>See more</Button>
	</CardFooter> -->
</Card>
