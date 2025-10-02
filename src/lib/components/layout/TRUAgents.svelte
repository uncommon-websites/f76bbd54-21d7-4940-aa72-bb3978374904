<!--
@component TRUAgents
Showcases the three specialized TRU Agents that power TrueTable's automation.
-->
<script lang="ts">
	// Icons
	import IconPackage from "~icons/lucide/package";
	import IconMegaphone from "~icons/lucide/megaphone";
	import IconUsers from "~icons/lucide/users";

	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Types
	type Agent = {
		name: string;
		tagline: string;
		description: string;
		icon: any;
	};

	// Data
	const agents: Agent[] = [
		{
			name: "TRUSupply",
			tagline: "Smart procurement",
			description:
				"Never run out, never overstock. TRUSupply forecasts demand, auto-generates purchase orders, and confirms with suppliers — all through WhatsApp. Your kitchen stays stocked, and your staff save hours every week.",
			icon: IconPackage
		},
		{
			name: "TRUMarketing",
			tagline: "AI-powered campaigns",
			description:
				"Campaigns ready in minutes, not weeks. TRUMarketing creates WhatsApp broadcasts and social campaigns instantly — promotions, festival offers, chef specials — all customized to your guests. It's like having a marketing team on call, without the cost.",
			icon: IconMegaphone
		},
		{
			name: "TRUStaff",
			tagline: "Smarter hiring",
			description:
				"The right hires, without the hassle. TRUStaff posts jobs, scores candidates, and even schedules interviews automatically. You get a shortlist of the best fits, while the agent handles the follow-up. Less paperwork, more focus on your team.",
			icon: IconUsers
		}
	];
</script>

<section class="section-py section-px">
	<div class="container mx-auto">
		<SectionHeader
			title="Meet the TRU Agents"
			subtitle="Specialized AI assistants that handle your most time-consuming tasks"
		/>

		<div class="mt-16 grid gap-8 md:grid-cols-3">
			{#each agents as agent}
				<article
					class="group relative grid gap-6 rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-emphasis-low"
				>
					<!-- Icon -->
					<div
						class="flex size-14 items-center justify-center rounded-xl bg-emphasis/5 text-emphasis transition-colors duration-300 group-hover:bg-emphasis/10"
					>
						<svelte:component this={agent.icon} class="size-7" />
					</div>

					<!-- Content -->
					<div class="grid gap-3">
						<div class="grid gap-1">
							<h3 class="text-title3 font-semibold">{agent.name}</h3>
							<p class="text-callout text-emphasis-dim">{agent.tagline}</p>
						</div>
						<p class="text-body text-emphasis-low leading-relaxed">
							{agent.description}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
