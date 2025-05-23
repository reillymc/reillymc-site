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
] as const satisfies Link[];

export default routes;
