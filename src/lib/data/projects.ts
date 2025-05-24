import { ProjectIcons } from "$lib/assets";
import type { Image, Link } from "$lib/types";
import { Apple, Github, Lock } from "@lucide/svelte";
import { Skills, type Skill } from "./skills";

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: string;
	description: string;
	screenshots?: Array<Image>;
}

export interface Project<S extends string = string> extends Item<S> {
	links: Array<Link>;
	color: string;
	type: string;
	skills: Array<Skill>;
}

export const myProjects: Array<Project> = [
	{
		slug: "framerate",
		color: "#5e95e3",
		description:
			"A movie and TV journal to rate and organise watch history and track upcoming releases",
		links: [
			{
				href: "https://github.com/reillymc/Framerate",
				icon: Github,
				label: "Frontend Repository",
			},
			{
				href: "https://github.com/reillymc/Framerate-Backend",
				icon: Github,
				label: "Backend Repository",
			},
			{
				href: "https://apps.apple.com/us/app/framerate/id6741703626",
				label: "App Store",
				icon: Apple,
			},
		],
		logo: ProjectIcons.framerate,
		name: "Framerate",
		skills: [
			Skills.reactNative,
			Skills.typescript,
			Skills.rust,
			Skills.postgres,
			Skills.docker,
			Skills.aws,
		],
		type: "Mobile / Web and Backend API",
	},
	{
		slug: "lamington",
		color: "#5e95e3",
		description: "A kitchen companion with recipes, meal plans, and grocery lists all in one place",
		links: [
			// {
			// 	type: 'github',
			// 	to: 'https://github.com/reillymc/Lamington',
			// 	icon: Github,
			// 	label: 'Frontend Repository',
			// 	newTab: true,
			// },
			// {
			// 	type: 'github',
			// 	to: 'https://github.com/reillymc/Lamington-Server',
			// 	icon: Github,
			// 	label: 'Backend Repository',
			// 	newTab: true,
			// },
			{
				href: undefined,
				label: "Code Currently Private",
				icon: Lock,
			},
		],
		logo: ProjectIcons.lamington,
		name: "Lamington",
		skills: [
			Skills.reactNative,
			Skills.node,
			Skills.typescript,
			Skills.postgres,
			Skills.mysql,
			Skills.docker,
			Skills.aws,
		],
		type: "Mobile / Web and Backend API",
	},
	{
		slug: "groundsman",
		color: "#5e95e3",
		description:
			"A utility for collecting geolocation data, custom designed for QUT GIS students and facilitators",
		links: [
			{
				href: "https://github.com/reillymc/Groundsman",
				icon: Github,
				label: "GitHub Repository",
			},
			{
				href: "https://apps.apple.com/us/app/groundsman/id1454150064",
				label: "App Store",
				icon: Apple,
			},
		],
		logo: ProjectIcons.groundsman,
		name: "Groundsman",
		skills: [Skills.csharp, Skills.sqlite, Skills.xamarin],
		type: "Mobile App (iOS / Android)",
	},
	{
		slug: "project-unleaded",
		color: "#ff3e00",
		description: "Project Unleaded finds the cheapest 7-Eleven fuel prices in Australia",
		links: [
			{
				href: "https://github.com/reillymc/Project-Unleaded",
				label: "GitHub Repository",
				icon: Github,
			},
		],
		logo: ProjectIcons.projectUnleaded,
		name: "Project Unleaded",
		skills: [Skills.swift],
		type: "Mobile App (iOS)",
		screenshots: [],
	},
	{
		slug: "react-native-components",
		color: "#fff",
		description: "Reusable, themeable component library used across a variety of my projects",
		links: [
			// {
			// 	href: "https://github.com/reillymc/ReactNativeComponents",
			// 	label: "GitHub Repository",
			// 	icon: Github,
			// },
			{
				href: undefined,
				label: "Code Currently Private",
				icon: Lock,
			},
		],
		logo: ProjectIcons.portfolioWebsite,
		name: "RN Components",
		skills: [Skills.reactNative, Skills.typescript, Skills.githubActions],
		type: "Component Library",
		screenshots: [],
	},
	{
		slug: "portfolio-website",
		color: "#ff3e00",
		description: "An interactive digital profile that presents a portfolio of projects and skills",
		links: [
			{
				href: "https://github.com/reillymc/reillymc-site",
				label: "GitHub Repository",
				icon: Github,
			},
		],
		logo: ProjectIcons.portfolioWebsite,
		name: "Portfolio Website",
		skills: [Skills.svelte, Skills.typescript, Skills.html, Skills.css, Skills.aws],
		type: "Website",
	},
];
