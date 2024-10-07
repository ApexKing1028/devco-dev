import * as React from "react";
import Technology from "@/components/technologies";

const Page = () => {
    const first = {
        title: "Custom ERP Development Company",
        content: [
            "Investing in an ERP system is crucial for your business. Getting a ready-made one? Not always the best choice. Why not aim for a custom ERP solution instead?",
            "Having all the necessary tools and features, that’s what makes businesses thrive! Customizing your own software with help from expert ERP developers can make this happen. ",
            "Don’t settle; strive to bolster success through personalized ERP systems. Trust me, opting for custom ERP software solutions will be worth it!",
            "And remember – It’s those unique touches we add to our very own customized ERPs that set us apart.",
        ]
    }

    const second = {
        title: "What Is Enterprise Resource Planning (ERP) Software?",
        description: [""],
        content: [
            "ERP software, often a whole pack of apps, helps you collect and analyze data from varied business activities. It’s like the central nervous system for different departments in your organization.",
            "As an ERP developer working on these systems isn’t easy; it involves understanding intricate aspects across various levels. So what does this mean?",
            "Well, think about customer relationship management or streamlining complex business processes – that’s where ERP solutions shine! Whether they are custom-made or off-the-shelf products depends upon specific needs.",
            "Now imagine creating custom ERP solutions tailored specifically to unique businesses’ demands – that is indeed the heart and soul of Custom ERP development.",
            "For mid- to large-size organizations, ERP software is imperative to better understand how the organization functions. You can use it to store important information, analyze your productivity and cost efficiency, and discover new ways you can optimize your business for further profitability or growth.",
        ]
    }

    const third = [
        {
            title: "The Benefits of Custom ERP Software",
            description: [
                "The only caveat is that you need to work with an ERP development partner you can trust. This is a collaborative and intensive process, so your choice will play an important role in both the quality and implementation of your finished product",
                "Building custom ERP software, rather than purchasing a preexisting solution, is beneficial for several reasons:"
            ],
            content:
                [
                    {
                        title: "All the features you need",
                        content: "With Custom ERP dashboards, you can be confident that the final product line-up covers all your needed apps and features. This makes understanding your business a whole lot easier!"
                    },
                    {
                        title: "A custom solution for your brand",
                        content: "Your software will be uniquely tailored to your brand. It'll perfectly match with your supply chain management, current procedures and other programs; all in sync!"
                    },
                    {
                        title: "Ongoing maintenance and support",
                        content: "Even after your ERP software is all set up, the work of the ERP development partners doesn't end. They stick around for continued maintenance and help so you can truly maximize your new system's benefits. This continuing assistance comes alongside every phase of an effective ERP implementation process for any ERP solution."
                    },
                    {
                        title: "Value maximization",
                        content: "Ultimately, custom ERP software will help you get the maximum potential value out of your apps—however you define “value.”"
                    },
                ]
        },
    ]

    const forth = null

    const fifth = null

    const sixth = {
        title: "How We Develop Custom ERP Software",
        description: [
            "At DEV.co, we strive to create the perfect ERP software for each of our clients. This is the general process we follow:",
        ],
        content: [
            {
                title: "Needs analysis",
                content: "ERP software varies in nature and scope based on the needs of the organization using it. Therefore, our first step is to learn more about you, your business, and your overall needs."
            },
            {
                title: "Consulting and planning",
                content: "Next, we spend time consulting with you, collaborating on a plan for your ERP software in the future."
            },
            {
                title: "Initial design and development",
                content: "From there, we can begin to build your ERP products, testing and evaluating them along the way."
            },
            {
                title: "Deployment",
                content: "Once the core products are finished, we’ll work on deploying your software throughout your organization—as quickly and risk-free as possible."
            },
            {
                title: "Maintenance, monitoring, and analysis",
                content: "After launch, we’ll work with you to actively monitor how your company is using the ERP software, analyzing its functionality and conducting maintenance when necessary."
            },
            {
                title: "New updates",
                content: "ERP software requires periodic updating. We’ll work with you to add new features, improve old ones, and generally optimize its functionality."
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
        title: "Contact with DEV.Co",
        content: [
            "Are you ready to improve the efficiency of your organization with ERP software? Or do you need to update your current ERP software with new features or better functionality?",
            "Contact DEV.co today for a free quote, or a free consultation!"
        ]
    }

    const tenth = null

    return (
        <Technology first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;