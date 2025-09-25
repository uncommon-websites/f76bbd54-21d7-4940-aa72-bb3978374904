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
	generating
	title="What we do"
	text="Our technology delivers measurable results through secure, adaptable solutions that directly increase productivity and drive growth."
/>

<Testimonials
	testimonials={[
		{
			name: "Maria Rodriguez",
			position: "Owner",
			company: "Cantina Veloce",
			quote:
				"Saved me about 18 hours a week—we finally stopped juggling spreadsheets and supplier texts. My margins improved by 22% in just two months.",
			image: "/generated/image-maria-rodriguez-a-restaurant-owner-is-ca.webp"
		},
		{
			name: "David Chen",
			position: "Owner",
			company: "Golden Dragon Bistro",
			quote:
				"We stopped paying commissions and started growing faster. Our repeat orders went up 34% in 3 weeks, and inventory management became effortless.",
			image: "/generated/image-david-chen-a-restaurant-owner-is-depicte.webp"
		},
		{
			name: "Amara Williams",
			position: "General Manager",
			company: "Indigo Bean Café",
			quote:
				"Hiring used to take me a week. Now it takes a day. The agent even pre-screens candidates and handles all the scheduling through WhatsApp.",
			image: "/generated/image-amara-williams-a-restaurant-owner-is-sho.webp"
		}
	]}
/>

<Features
	title="Everything your restaurant needs"
	subtitle="Specialized AI agents handle procurement, marketing, and hiring so you can focus on what matters most"
	features={[
		{
			title: "WhatsApp-only ordering",
			description: "No apps, no commissions, no complexity. Customers order through WhatsApp while you keep 100% of every sale.",
			imageSrc: "/generated/image-whatsapp-interface-on-smartphone-restau.webp"
		},
		{
			title: "AI inventory automation",
			description: "Stop spending 15+ hours weekly on manual tracking. Our AI monitors stock levels and coordinates with suppliers automatically.",
			imageSrc: "/generated/image-restaurant-kitchen-inventory-being-track.webp"
		},
		{
			title: "Smart hiring workflows",
			description: "Find and onboard quality staff faster with AI-powered screening and automated scheduling that reduces hiring time by 70%.",
			imageSrc: "/generated/image-restaurant-staff-being-hired-efficiently.webp"
		}
	]}
/>
<AboutTeaser generating />
<CallToAction generating />
