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
					body: "At TrueTable, we value your privacy. This policy explains how we collect, use, and protect your information."
				},
				{
					title: "Information We Collect",
					body: "Personal details (name, email, phone) when you sign up. Business details (restaurant name, preferences). Usage data (how you interact with our app/website)."
				},
				{
					title: "How We Use Information",
					body: "Provide and improve our services. Communicate with you (support, updates, offers). Analyze usage to enhance performance."
				},
				{
					title: "Data Protection",
					body: "All data is encrypted in transit and at rest. Role-based access ensures only authorized staff can view information."
				},
				{
					title: "Your Rights",
					body: "You can request a copy or deletion of your data. You can opt out of marketing emails anytime. Contact support@truetable.in"
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
