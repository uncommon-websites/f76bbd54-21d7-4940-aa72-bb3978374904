<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";

	// Props
	let {
		title = "",
		subtitle = "",
		oncomplete = () => {},
		size = "sm",
		iconUrl = ""
	}: {
		title: string;
		subtitle: string;
		oncomplete?: () => void;
		size?: "sm" | "lg";
		iconUrl?: string;
	} = $props();
</script>

<div
	class={[
		"section-pb-sm container-sm grid text-balance",
		size === "lg" ? "text-display" : "text-title2"
	]}
>
	<h2 class="flex items-center gap-3">
		{#if iconUrl}
			<img src={iconUrl} alt="" class="h-8 w-8 inline-block" />
		{/if}
		<AnimateText text={title} {oncomplete} />
	</h2>
	<p class="text-emphasis-dim">
		<AnimateText text={subtitle} />
	</p>
</div>
