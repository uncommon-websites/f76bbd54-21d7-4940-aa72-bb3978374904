<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Owner power",
			description: "Independent restaurants deserve the same operational advantages as big chains, without the complexity or cost."
		},
		{
			title: "Simple first",
			description: "Thirty-minute WhatsApp setup, zero learning curve. Technology should work for you, not against you."
		},
		{
			title: "Data ownership",
			description: "Your customer information stays yours. We don't sell your data or lock you into our platform."
		}
	];
</script>

<SecondaryHero
	title="Time back in your hands"
	subtitle="Built for owners, not systems"
	imageSrc="/generated/image-a-documentary-style-photograph-of-an-ind.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"I started TrueTable after spending months with independent restaurant owners, watching them fight to keep their businesses running.",
		"Most were burning 15 to 20 hours a week on manual tasks—inventory, supplier calls, staff scheduling—across a mess of tools and WhatsApp threads.",
		"What they needed wasn't just more software— they needed something that could actually do the work for them.",
		"That's why we created TrueTable—AI-powered agents that don't just track tasks but handle them—end to end.",
		"We believe independent restaurants deserve the same operational firepower as the big chains—without the complexity, cost, or steep learning curve."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Our team."
	subtitle="Your partners in innovation."
	stakeholders={[
		{
			name: "Alex Morgan",
			position: "Founder & CEO",
			bio: "Started the company with a vision to transform the industry through innovative solutions.",
			image: "https://www.unc.mn/image-placeholder.svg"
		},
		{
			name: "Jamie Chen",
			position: "Chief Design Officer",
			bio: "Award-winning designer with a passion for creating intuitive and beautiful experiences.",
			image: "https://www.unc.mn/image-placeholder.svg"
		},
		{
			name: "Taylor Wright",
			position: "Head of Engineering",
			bio: "Technology enthusiast focused on building scalable systems that make a difference.",
			image: "https://www.unc.mn/image-placeholder.svg"
		}
	]}
/>

<StakeholderGrid
	stakeholderType="investor"
	title="Backed by the best."
	subtitle="Point Nine, TSIC and others"
	stakeholders={[
		{
			name: "Point Nine Capital",
			image: "https://cdn.brandfetch.io/pointnine.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7"
		},
		{
			name: "TSIC Ventures",
			image: "https://cdn.brandfetch.io/tiny.vc/w/400/h/400/logo?c=1a2b3c4d5e"
		},
		{
			name: "Sequoia Capital",
			image: "https://cdn.brandfetch.io/sequoiacap.com/w/400/h/400/logo"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
	title="Stop running around your restaurant"
	subtitle="Start running it instead"
	description="Join over 10,000 restaurant owners who've reclaimed 15+ hours weekly with AI agents that handle procurement, hiring, and marketing through WhatsApp. Set up in 30 minutes, own your data forever."
	imageSrc="/generated/image-a-restaurant-owner-in-a-well-worn-apron-.webp"
/>
