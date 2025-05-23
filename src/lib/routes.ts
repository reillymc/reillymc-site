import type { Link } from "./types";

const routes = [
	{
		href: "/",
		label: "Home",
	},
] as const satisfies Link[];

export default routes;
