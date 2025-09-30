<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
</script>

<Hero
	title="Run your restaurant. Not around it."
	subtitle="One place for ordering, hiring, and inventory. Period."
	imageSrc="/generated/image-a-restaurant-owner-stands-in-the-middle-.webp"
	centered={false}
/>
<LogoScroller 
	label="Trusted by restaurant brands across the industry"
	logoUrls={[
		'https://cdn.brandfetch.io/sweetgreen.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/bluebottlecoffee.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/shake-shack.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/panerabread.com/w/400/h/400/logo'
	]}
/>

<Summary
	title="What we do"
	text="Manual AI eliminates the daily chaos—from inventory to hiring—so you can focus on food and guests. Our AI agents take care of procurement, marketing, and staffing tasks that normally eat up 15+ hours a week, giving independent restaurant owners the operational power of big chains without the complexity or cost."
/>

<Testimonials
	testimonials={[
		{
			name: "Priya Sharma",
			position: "Owner",
			company: "Masala Kitchen",
			quote:
				"TrueTable saved me 18 hours every week on inventory tracking and supplier coordination. I finally have time to focus on creating new dishes and connecting with customers instead of drowning in spreadsheets.",
			image: "/generated/image-medium-distance-environmental-portrait-o.webp"
		},
		{
			name: "Carlos Rivera",
			position: "General Manager",
			company: "Verde Bistro",
			quote:
				"Our food costs dropped 22% in three months thanks to TrueTable's smart procurement alerts. The WhatsApp interface means my entire team adopted it instantly - no training headaches or resistance.",
			image: "/generated/image-medium-distance-editorial-portrait-of-a-.webp"
		},
		{
			name: "Keisha Washington",
			position: "Owner",
			company: "Morning Brew Café",
			quote:
				"Before TrueTable, hiring took weeks and cost us thousands in bad hires. Now I fill positions in 3 days with pre-screened candidates who actually show up. My stress levels have never been lower.",
			image: "/generated/image-medium-distance-documentary-style-portra.webp"
		}
	]}
/>

<Features
	title="AI agents that work around the clock"
	subtitle="Stop losing 15+ hours weekly to manual restaurant management"
	features={[
		{
			title: "WhatsApp-only interface",
			description: "Skip the complex dashboards and manage everything through WhatsApp messages. Your team already knows how to use it.",
			imageSrc: "/generated/image-a-restaurant-customer-stands-at-the-coun.webp"
		},
		{
			title: "Smart inventory tracking",
			description: "AI agents automatically track stock levels and predict ordering needs. Never run out of ingredients or overstock again.",
			imageSrc: "/generated/image-a-restaurant-kitchen-scene-showing-staff.webp"
		},
		{
			title: "Automated supplier coordination",
			description: "AI handles vendor negotiations and delivery scheduling while you focus on serving customers and growing revenue.",
			imageSrc: "/generated/image-a-delivery-person-arrives-at-a-bustling-.webp"
		},
		{
			title: "Commission-free ordering",
			description: "Keep 100% of your profits with direct customer ordering that bypasses expensive third-party delivery platforms.",
			imageSrc: "/generated/image-a-restaurant-owner-stands-in-a-back-offi.webp"
		},
		{
			title: "Intelligent hiring assistant",
			description: "AI screens candidates and schedules interviews automatically. Find qualified staff faster with zero manual effort.",
			imageSrc: "/generated/image-a-restaurant-owner-is-in-conversation-wi.webp"
		},
		{
			title: "30-minute setup guarantee",
			description: "Get up and running in under 30 minutes with zero training required. Your entire team can start using TrueTable immediately.",
			imageSrc: "/generated/image-a-restaurant-team-collaborates-in-a-mode.webp"
		}
	]}
/>
<AboutTeaser generating />
<CallToAction generating />
