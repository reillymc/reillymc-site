<script lang="ts">
	import { Details } from "$lib/data/details";
	import "../app.css";
</script>

<div class="flex h-dvh w-screen max-w-[1600px] flex-col px-4 pt-4 md:px-16 lg:px-28">
	<div class="flex flex-1">
		<slot />
	</div>
	<footer class="py-4 text-center">
		© {Details.fullName} 2025
	</footer>
</div>
