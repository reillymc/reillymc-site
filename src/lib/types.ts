import type { Component } from "svelte";

export interface Link {
	href: string | undefined;
	label: string;
	icon?: Component;
}

export interface Image {
	src: string;
	caption?: string;
}
