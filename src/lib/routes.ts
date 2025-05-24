import type { Link } from "./types";

const routes = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/projects",
		label: "Projects",
	},
] as const satisfies Link[];

export default routes;
