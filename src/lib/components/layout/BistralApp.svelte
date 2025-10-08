<!--
@component BistralApp
Showcases the WhatsApp TRU Manager and its core capabilities for streamlining daily restaurant operations.
-->
<script lang="ts">
	// Components
	import SectionHeader from "./SectionHeader.svelte";
	import Card from "../ui/Card.svelte";

	// Types
	type Feature = {
		title: string;
		description: string;
		logoUrl?: string;
		imageSrc?: string;
	};

	// WhatsApp logo
	const whatsappLogo = "https://logo.clearbit.com/whatsapp.com";

	// Data
	const features: Feature[] = [
		{
			title: "Order management",
			description:
				"Track every order from kitchen to table in real-time, ensuring nothing falls through the cracks during peak hours.",
			logoUrl: whatsappLogo,
			imageSrc: "/generated/image-restaurant-manager-using-mobile-app-in-b.webp"
		},
		{
			title: "Menu control",
			description:
				"Update prices, add specials, and manage availability instantly across all ordering channels from one simple interface.",
			logoUrl: whatsappLogo,
			imageSrc: "/generated/image-chef-reviewing-digital-menu-on-tablet.webp"
		},
		{
			title: "Staff scheduling",
			description:
				"Build schedules, manage shift swaps, and track attendance automatically so your team always knows when they're working.",
			logoUrl: whatsappLogo,
			imageSrc: "/generated/image-restaurant-staff-coordinating-schedules-.webp"
		},
		{
			title: "Supplier coordination",
			description:
				"Communicate with vendors, track deliveries, and manage purchase orders without endless phone calls or missed messages.",
			logoUrl: whatsappLogo,
			imageSrc: "/generated/image-supplier-delivery-coordination-at-resta.webp"
		}
	];
</script>

<section class="section-py section-px bg-background-dim">
	<div class="container mx-auto">
		<SectionHeader
			title="WhatsApp TRU Manager"
			subtitle="Your forever-available tool for streamlining daily operations"
			iconUrl={whatsappLogo}
		/>

		<div class="mt-8 grid gap-2 md:grid-cols-2">
			{#each features as feature}
				<Card {...feature} />
			{/each}
		</div>
	</div>
</section>
