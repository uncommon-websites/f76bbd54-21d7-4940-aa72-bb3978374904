<script lang="ts">
	import type { Component } from "svelte";

	interface Props {
		title?: string;
		description?: string;
		icon?: Component;
		iconClass?: string;
		imageSrc?: string;
		imageAspect?: "16/9" | "9/16";
		class?: string;
	}

	let {
		title = "",
		description = "",
		icon,
		iconClass = "size-5 text-primary",
		imageSrc,
		imageAspect = "16/9",
		class: customClass = ""
	}: Props = $props();
</script>

<article
	class="bg-card hover:bg-sidebar-primary-foreground hover:text-primary-900 border-border flex flex-col rounded-(--radius) border p-2 text-pretty transition duration-300 ease-out {customClass}"
>
	{#if icon || imageSrc}
		<div class="mb-2">
			{#if icon && imageSrc}
				{@const Icon = icon}
				<div class="relative">
					<img
						src={imageSrc}
						alt={title}
						class="w-full object-cover {imageAspect === '9/16' ? 'aspect-[9/16]' : 'aspect-[16/9]'}"
						style="border-radius: max(2px, calc(var(--radius) - 0.5rem));"
					/>
					<div
						class="absolute top-1.5 left-1.5 bg-white/90 p-1 backdrop-blur-sm"
						style="border-radius: max(2px, calc(var(--radius) - 0.625rem));"
					>
						<Icon
							class="size-3 {iconClass.includes('text-')
								? iconClass.split(' ').find((c) => c.startsWith('text-'))
								: 'text-primary'}"
						/>
					</div>
				</div>
			{:else if icon}
				{@const Icon = icon}
				<Icon class={iconClass} />
			{:else if imageSrc}
				<img
					src={imageSrc}
					alt={title}
					class="w-full object-cover {imageAspect === '9/16' ? 'aspect-[9/16]' : 'aspect-[16/9]'}"
					style="border-radius: max(2px, calc(var(--radius) - 0.5rem));"
				/>
			{/if}
		</div>
	{/if}

	<div class:mt-auto={icon || imageSrc}>
		<h3 class="text-sm font-semibold mb-1">
			{title}
		</h3>
		<p class="text-xs max-w-prose opacity-60">{description}</p>
	</div>
</article>
