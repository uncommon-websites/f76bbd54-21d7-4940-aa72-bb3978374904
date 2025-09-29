<script lang="ts">
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";

	let {
		title,
		subtitle,
		imageSrc = "https://www.unc.mn/image-placeholder.svg",
		...rest
	}: {
		title: string;
		subtitle: string;
		imageSrc: string;
		[key: string]: any;
	} = $props();
</script>

<header class="bg-black text-white" {...rest}>
	<div class="section-px section-py container mx-auto grid gap-16 gap-y-0">
		<div class="text-center">
			<h1 class="text-display font-black mb-4 text-white">{title}</h1>
			<p class="text-title2 text-gray-300 font-normal max-w-4xl mx-auto">{subtitle}</p>
		</div>
		<div class="aspect-video overflow-clip rounded-xl bg-gray-900 border border-gray-800">
			<img
				class="h-full w-full object-cover"
				src={imageSrc}
				alt="Independent restaurant owner managing operations with team in modern kitchen"
			/>
		</div>
	</div>
</header>
