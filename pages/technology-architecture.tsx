import * as React from "react";
import Service from "@/components/services";

const Page = () => {
    const first = {
        title: "Technology Architecture Consulting",
        content: ["Your business's technology architecture plays a vital role in your productivity, your operational capacity, your security, and practically every other area of your business's operations.", "Without the right tech systems in place, your business won't be able to operate efficiently—and certainly won't be able to scale."]
    }

    const second = {
        title: "The Importance of Technology Architecture Consulting",
        description: ["Technology architecture consulting allows you to design and develop a tech stack that can support all your future products and applications.", "Your systems, including front-end, middle tier, back-end, and server-level, should all support your organization, both as it stands today and as it can grow in the future."],
        content: ["The alternative is to have a system that requires analysis, rewriting, and rebuilding; these processes take time and cost money, ultimately compromising your effectiveness as an organization.", "Consulting with a technology architecture specialist means you'll have a team of professionals guiding the design and development of your tech stack.  Together, we'll review your existing infrastructure, your current capabilities, your plans for the future, and even your available resources. From there, we can work collaboratively on a plan that will support your business's technological needs for years to come (if not indefinitely)."]
    }

    const third = [
        {
            title: "Principles of Technology Architecture Consultin",
            description: ["Technology architecture consulting focuses its attention on several key principles:"],
            content:
                [
                    {
                        title: "The Stack",
                        content: "The technology stack itself will determine your business's efficiency, productivity, security, and more. Together, we'll be able to design and develop the front-end, middle tier, back-end, and server systems, as well as all the tech tools you need to succeed."
                    },
                    {
                        title: "Scalability",
                        content: "Your technology also needs to be scalable. It's not enough to have all the tools and systems you need today; you also have to think about how your needs are going to change in the near and distant future. One of our biggest priorities is designing a tech stack that can support you for years to come."
                    },
                    {
                        title: "Innovation",
                        content: "The right tech stack will set the stage for innovation in all other areas of your business; innovation in your tech architecture will support your business everywhere else."
                    },
                    {
                        title: "A Custom Fit",
                        content: "Tech architecture shouldn't look the same for every business. It needs to be designed specifically for you—a custom fit for your organization's unique needs."
                    }
                ]
        },
    ]

    const forth = null

    const fifth = null

    const sixth = {
        title: "How to Choose a Technology Architecture Consulting Partner",
        description: [
            "Your technology architecture project success depends on your ability to choose the right consulting partner.",
            "These qualities are some of the most important to consider:"
        ],
        content: [
            {
                title: "Experience",
                content: "What kind of experience does this company have? Do they specialize in technology architecture consulting? What kinds of clients have they had in the past?"
            },
            {
                title: "Resources",
                content: "Does this partner have a full team of people ready and willing to work on your project? What kind of timeline do they have for your project?"
            },
            {
                title: "Philosophy",
                content: "How does this partner think about technology architecture? Ideally, you'll find a partner who shares your development and technology philosophies."
            },
            {
                title: "Culture Fit",
                content: "Do you and this consultant share the same values? This isn't a strict necessity, but it can make the process friendlier to collaboration."
            },
            {
                title: "Communication",
                content: "Finally, how does this agency communicate? Is it easy to get in touch with an agent? Are they transparent and willing to answer all your questions clearly?"
            }
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
        title: "Are you ready to begin work on your technology architecture project?",
        content: ["Contact DEV.co today for a free quote, or a free consultation!"]
    }

    const tenth = null

    return (
        <Service first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;