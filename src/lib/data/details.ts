import type { Link } from "$lib/types";
import { Github, Linkedin } from "@lucide/svelte";

export const Details = {
	fullName: "Reilly MacKenzie-Cree",
	firstName: "Reilly",
	email: "hello@reillymc.com",
	jobTitle: "Full-Stack Software Engineer",
	links: [
		{
			label: "GitHub",
			href: "https://github.com/reillymc",
			icon: Github,
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/reillymc",
			icon: Linkedin,
		},
	] satisfies Link[],
};
