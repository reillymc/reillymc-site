<script>
	import { page } from "$app/state";
	import { Details } from "$lib/data/details";
</script>

<svelte:head>
	<title>{`${page.status} | ${Details.fullName}`}</title>
</svelte:head>

<h1>{page.status} {page.error?.message}</h1>
