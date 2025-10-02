const legal = {
	privacy: {
		meta: {
			title: "Privacy Policy",
			description:
				"Our privacy policy explains how we collect, use, and protect your personal information."
		},
		content: {
			lastUpdated: new Date().toISOString(),
			sections: [
				{
					title: "Introduction",
					body: "We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
				},
				{
					title: "Information We Collect",
					body: "We may collect, use, store and transfer different kinds of personal data about you including: Identity Data (name, username), Contact Data (email, phone), Technical Data (IP address, browser info), and Usage Data (how you use our website)."
				},
				{
					title: "How We Use Your Information",
					body: "We will only use your personal data when legally permitted. Most commonly to perform contracts with you, for our legitimate interests, or to comply with legal obligations."
				},
				{
					title: "Data Security",
					body: "We have implemented appropriate security measures to prevent unauthorized access, alteration, disclosure, or destruction of your personal data."
				},
				{
					title: "Your Legal Rights",
					body: "You have rights to access, correct, erase, object to processing, restrict processing, and transfer your personal data. Contact us to exercise these rights."
				},
				{
					title: "Contact Us",
					body: "If you have questions about this privacy policy, please contact us at privacy@example.com."
				}
			]
		}
	},
	terms: {
		meta: {
			title: "Terms of Service",
			description: "Our terms of service outline the rules and regulations for using TrueTable."
		},
		content: {
			lastUpdated: new Date().toISOString(),
			sections: [
				{
					title: "Acceptance of Terms",
					body: "By using TrueTable, you agree to these terms."
				},
				{
					title: "Services Provided",
					body: "TrueTable offers AI-driven tools for restaurants to manage operations, ordering, and communication."
				},
				{
					title: "User Responsibilities",
					body: "Provide accurate information. Use the service only for lawful business purposes. Keep login details secure."
				},
				{
					title: "Payment & Subscription",
					body: "Services are billed monthly unless stated otherwise. Fees are non-refundable once the billing cycle starts."
				},
				{
					title: "Limitations",
					body: "TrueTable is not responsible for downtime, third-party integrations, or indirect losses."
				},
				{
					title: "Termination",
					body: "You may cancel anytime; access will continue until the end of the billing cycle. We may suspend or terminate accounts violating these terms."
				},
				{
					title: "Governing Law",
					body: "These terms are governed by Indian law."
				}
			]
		}
	}
};

// Types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const { type } = params as { type: keyof typeof legal };
	const content = legal[type];

	return content;
};
