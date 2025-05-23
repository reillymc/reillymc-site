<script lang="ts">
	let { open = $bindable(false) }: { open: boolean } = $props();
</script>

<button
	aria-label="menu-hamburger-button"
	class="cursor-pointer p-2"
	class:open
	onclick={() => (open = !open)}
>
	<svg width="32" height="24">
		<line id="top" x1="2" y1="2" x2="30" y2="2" />
		<line id="bottom" x1="2" y1="22" x2="30" y2="22" />
		<line id="middle" x1="2" y1="12" x2="30" y2="12" />
	</svg>
</button>

<style>
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		stroke-linecap: round;
		transition: transform 0.25s ease-in-out;
	}

	.open #top {
		transform: translate(6.5px, -0.5px) rotate(45deg);
	}

	.open #middle {
		transform: translate(16px, 0px) scaleX(0);
	}

	.open #bottom {
		transform: translate(-11px, 8px) rotate(-45deg);
	}
</style>
