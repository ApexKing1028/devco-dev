import * as React from "react";
import Technology from "@/components/technologies";

const Page = () => {
    const first = {
        title: "Business Intelligence Development Services",
        content: [
            "Businesses are evolving, with better tools, more data, and organization-wide systems that support greater insights and better decision making. Together, these technologies allow businesses to gain a competitive advantage and operate more efficiently than ever before.",
            "But to be successful, you’ll need a custom business intelligence suite that complements and addresses your organization’s unique needs."
        ]
    }

    const second = {
        title: "Business Intelligence Development Services",
        description: [""],
        content: [
            "Our business intelligence development services include:",
            "Business analytics software development",
            "Mobile business intelligence app development",
            "Business intelligent dashboard design and development",
            "Data analytics and reporting solutions",
            "Business intelligence predictive analytics development",
            "Business intelligence consulting services",
            "End user adoption analysis and management",
        ]
    }

    const third = [
        {
            title: "What Is Business Intelligence?",
            description: [
                "Business intelligence is a collection of technologies and strategies used by organizations to analyze business-related data.",
                "There are dozens of individual tools and tactics that come together in a comprehensive collection, ultimately providing institutional decision makers with the insights they need to improve business development.",
                "Building and utilizing the right business intelligence software can help you resolve these problems.",
                "Unfortunately, many business intelligence practitioners run into a handful of problems:",
            ],
            content:
                [
                    {
                        title: "Data demand",
                        content: "Businesses are ever-hungry for high-quality data. Without a reliable system to collect and store data at constantly-increasing volume, your business could quickly fall behind."
                    },
                    {
                        title: "Raw data interpretation",
                        content: "Raw data doesn’t mean much. Analytic tools are a practical requirement to understand the information you’re gathering."
                    },
                    {
                        title: "Data actionability",
                        content: "You may be able to form an accurate conclusion from the data you’ve gathered, but what are you supposed to do next? Data is only useful if it’s truly actionable."
                    },
                ]
        },
    ]

    const forth = null

    const fifth = {
        title: "Key Components of an Effective Business Intelligence Platform",
        description: [
            "A solid business intelligence platform should be",
        ],
        content: [
            {
                title: "Cross-departmental",
                content: "Business intelligence depends on data from a variety of sources within and outside your organization. All your departments should be united in this system."
            },
            {
                title: "Intuitive",
                content: "Intuitive platforms are beneficial for several reasons. They’re easier for employees to adopt and use. They’re more accurate and more consistent. They also make it simple to share and transfer data."
            },
            {
                title: "Action-centric",
                content: "The key to any effective business intelligence or analytics platform is a link to actionability. What features allow you to take action on your latest data sets?"
            },
            {
                title: "Optimized for your organization",
                content: "Out-of-the-box business intelligence systems won’t be tailor-made for your organization; it’s better to have a customized product."
            },
        ]
    }

    const sixth = {
        title: "How We Develop Business Intelligence Solutions",
        description: [
            "We take a slightly different approach with every business intelligence client, but we typically follow the same overarching formula:",
        ],
        content: [
            {
                title: "Initial discovery and analysis",
                content: "Everything starts by better understanding your business and your core needs. What are you hoping to achieve? What are your biggest pain points currently?"
            },
            {
                title: "Brainstorming and workshopping",
                content: "Next, we work together to design new platforms, systems, and integrations to support your business intelligence needs."
            },
            {
                title: "System design and development",
                content: "Our developers work to make our collective vision a reality."
            },
            {
                title: "Testing and launch",
                content: "From there, we thoroughly test our product and prepare for an organization-wide launch."
            },
            {
                title: "Audits and improvements",
                content: "We also provide our clients with ongoing support after the launch of your business intelligence systems. We’ll audit how you and your employees are using it, and make upgrades to serve you better."
            },
        ]
    }

    const seventh = null

    const eighth = [
        {
            title: "Understanding",
            content: "Background details vision & values target personas Stakeholder insights"
        },
        {
            title: "Research & Discovery",
            content: "Customer research Competitive analysis Expert audits & insights Current market Positioning"
        },
        {
            title: "Strategy",
            content: "Story & personality Market opportunities Positioning & messaging Creative brief development"
        },
        {
            title: "Creative",
            content: "Naming Logo development Graphics standards Verify function Messaging framework"
        },
        {
            title: "Deliver",
            content: "Brand book & styleguide Print integration Online & mobile Further brand extension"
        }
    ]

    const nineth = {
        title: "Partner With Dev.co",
        content: [
            "Is your business in need of a business intelligence system?",
            "Are you ready for a quote for business intelligence software development?",
            "Contact DEV.co today for a free quote, or a free consultation!"
        ]
    }

    const tenth = null

    return (
        <Technology first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;