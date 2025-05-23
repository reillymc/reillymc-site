import { SkillIcons } from "$lib/assets";

export type Skill = {
	name: string;
	icon?: string;
};

type SkillGroup = {
	name: string;
	description?: string;
	skills: Skill[];
};

type MySkills = SkillGroup[];

export const Skills = {
	csharp: { name: ".NET / C#", icon: SkillIcons.csharp },
	node: { name: "Node.js", icon: SkillIcons.node },
	react: { name: "React.js", icon: SkillIcons.react },
	reactNative: { name: "React Native", icon: SkillIcons.react },
	typescript: { name: "TypeScript", icon: SkillIcons.typescript },
	javascript: { name: "JavaScript", icon: SkillIcons.javascript },
	html: { name: "HTML", icon: SkillIcons.html },
	css: { name: "CSS", icon: SkillIcons.css },
	less: { name: "Less", icon: SkillIcons.less },
	mysql: { name: "MySQL / MariaDB", icon: SkillIcons.mysql },
	postgres: { name: "PostgreSQL", icon: SkillIcons.psql },
	playwright: { name: "Playwright", icon: SkillIcons.playwright },
	docker: { name: "Docker", icon: SkillIcons.docker },
	kubernetes: { name: "Kubernetes", icon: SkillIcons.k8s },
	linux: { name: "Linux", icon: SkillIcons.linux },
	aws: { name: "AWS", icon: SkillIcons.aws },
	nix: { name: "Nix / NixOS", icon: SkillIcons.nix },
	rust: { name: "Rust", icon: SkillIcons.rust },
	swift: { name: "Swift", icon: SkillIcons.swift },
	python: { name: "Python", icon: SkillIcons.python },
	sass: { name: "Sass", icon: SkillIcons.sass },
	go: { name: "Go", icon: SkillIcons.go },
	xamarin: { name: "Xamarin", icon: SkillIcons.xamarin },
	svelte: { name: "Svelte", icon: SkillIcons.svelte },
	bun: { name: "Bun", icon: SkillIcons.bun },
	sqlite: { name: "SQLite", icon: SkillIcons.sqlite },
	npm: { name: "NPM Administration", icon: SkillIcons.npm },
	githubActions: { name: "GitHub Actions", icon: SkillIcons.githubActions },
} satisfies Record<string, Skill>;

export const mySkills: MySkills = [
	{
		name: "Skills",
		skills: [
			Skills.csharp,
			Skills.node,
			Skills.react,
			Skills.reactNative,
			Skills.typescript,
			Skills.javascript,
			Skills.html,
			Skills.css,
			Skills.less,
			Skills.mysql,
			Skills.postgres,
			Skills.playwright,
			Skills.docker,
			Skills.kubernetes,
			Skills.linux,
			Skills.aws,
			Skills.npm,
		],
	},
	{
		name: "Hobbies",
		skills: [
			Skills.nix,
			Skills.rust,
			Skills.go,
			Skills.python,
			Skills.svelte,
			Skills.bun,
			Skills.xamarin,
			Skills.sass,
		],
	},
];
