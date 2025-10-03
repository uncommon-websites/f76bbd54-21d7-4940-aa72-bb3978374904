<!--
@component BistralApp
Showcases the Bistral manager's app and its core capabilities for streamlining daily restaurant operations.
-->
<script lang="ts">
	// Icons
	import IconClipboardList from "~icons/lucide/clipboard-list";
	import IconMenuSquare from "~icons/lucide/menu-square";
	import IconCalendarClock from "~icons/lucide/calendar-clock";
	import IconTruck from "~icons/lucide/truck";

	// Components
	import SectionHeader from "./SectionHeader.svelte";
	import Card from "../ui/Card.svelte";

	// Types
	type Feature = {
		title: string;
		description: string;
		icon: any;
		imageSrc?: string;
	};

	// Data
	const features: Feature[] = [
		{
			title: "Order management",
			description:
				"Track every order from kitchen to table in real-time, ensuring nothing falls through the cracks during peak hours.",
			icon: IconClipboardList,
			imageSrc: "/generated/image-restaurant-manager-using-mobile-app-in-b.webp"
		},
		{
			title: "Menu control",
			description:
				"Update prices, add specials, and manage availability instantly across all ordering channels from one simple interface.",
			icon: IconMenuSquare,
			imageSrc: "/generated/image-chef-reviewing-digital-menu-on-tablet.webp"
		},
		{
			title: "Staff scheduling",
			description:
				"Build schedules, manage shift swaps, and track attendance automatically so your team always knows when they're working.",
			icon: IconCalendarClock,
			imageSrc: "/generated/image-restaurant-staff-coordinating-schedules-.webp"
		},
		{
			title: "Supplier coordination",
			description:
				"Communicate with vendors, track deliveries, and manage purchase orders without endless phone calls or missed messages.",
			icon: IconTruck,
			imageSrc: "/generated/image-supplier-delivery-coordination-at-resta.webp"
		}
	];
</script>

<section class="section-py section-px bg-background-dim">
	<div class="container mx-auto">
		<SectionHeader
			title="Bistral manager's app"
			subtitle="Your forever-available tool for streamlining daily operations"
		/>

		<div class="mt-8 grid gap-2 md:grid-cols-2">
			{#each features as feature}
				<Card {...feature} />
			{/each}
		</div>
	</div>
</section>
