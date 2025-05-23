<script lang="ts">
	import { page } from "$app/state";
	import NavigationBar from "$lib/components/NavigationBar.svelte";
	import { TooltipProvider } from "$lib/components/ui/tooltip";
	import { Details } from "$lib/data/details";
	import routes from "$lib/routes";
	import "../app.css";
</script>

<TooltipProvider>
	<div class="flex h-dvh w-screen max-w-[1600px] flex-col px-4 pt-4 md:px-16 lg:px-28">
		<NavigationBar {routes} segment={`/${page.url.pathname.split("/")?.[1] ?? ""}`} />
		<div class="flex flex-1">
			<slot />
		</div>
		<footer class="py-4 text-center">
			© <a href="/about">{Details.fullName}</a> 2025
		</footer>
	</div>
</TooltipProvider>
