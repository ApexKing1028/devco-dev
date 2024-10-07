import * as React from "react";
import Industry from "@/components/industries";

const Page = () => {
    const first = {
        title: "Enterprise Software Development",
        content: [
            "For startups and small businesses, generic software can be useful and cost-effective. There are plenty of low-cost, cookie-cutter solutions that provide valuable features and benefits.",
            "But as businesses grow, so does the list of needs. And it’s at this point that enterprise software development project becomes an attraction option."
        ]
    }

    const second = {
        title: "Key Characteristics of Enterprise Software",
        description: [""],
        content: [
            "Enterprise software is custom software that’s designed to benefit, aid, and assist the needs of an organization, as opposed to solely focusing on one or two individual users.",
            "And because it’s intended for a specific organization, it’s built in the context for which it’ll be used. Building custom enterprise software limits the number of wasted features and options, which so often slow down teams and create unnecessary confusion."
        ]
    }

    const third = [
        {
            title: "When it comes to enterprise software, there are some different characteristics and features you should consider:",
            description: [
                "Every enterprise software system has its unique features. Yet, these overarching benefits underscore why businesses should be thrilled! Custom developers bring in serious value through their work on these enterprise systems. Think about it: customer relationship management and business intelligence are crucial parts of any successful enterprise solution package. Not to mention other key aspects of well-rounded enterprise solutions too."
            ],
            content:
                [
                    {
                        title: "Usability",
                        content: "Custom enterprise software offers a user-friendly experience. Unlike one-size-fits-all products, these are made for your specific needs. They boost value from investments and optimize business processes using tailor-made 'enterprise apps'. An added benefit is that Enterprise resource planning (ERP) becomes more efficient with custom enterprise app development."
                    },
                    {
                        title: "Performance",
                        content: "Specifically designed software beats traditional software solutions. They're not vaguely made but have clear goals, improving their performance drastically. This is the heart of enterprise development in cloud solutions; we call them 'enterprise application development'. Their high efficiency makes them a reliable business software solution."
                    },
                    {
                        title: "Scalability",
                        content: "Enterprise solution shouldn't stunt a firm's pursuit of big business objectives. One major perk is the growth-centric design of these top-tier software platforms. This adaptability lets operations scale without affecting user interface smoothness or overall performance. Standard software development doesn't always provide this level, but enterprise grade software does. Built by an expert enterprise developer with continuity in mind, it mitigates maintenance costs and allows for steady expansion over time."
                    },
                    {
                        title: "Integration",
                        content: "In a nutshell, most companies use 15 to 50 different tools for tasks like supply chain management. For growth, enterprise develop software should integrate well with this tech mix. Hence, custom solutions that focus on interconnectivity and flexible software architecture are necessary in any development project."
                    },
                    {
                        title: "Cost",
                        content: "Despite the initial cost, enterprise software has a higher return versus regular software development. This isn't just about longevity; using integrated system business apps with existing systems is beneficial long-term. Features like marketing automation ease data integration tasks significantly. However, tying these elements together requires strong project manager with skills!"
                    },
                ]
        },
    ]

    const forth = [
        {
            title: "Outsourcing Enterprise Software Development",
            description: "Very few businesses have the internal resources required to develop their own custom software. (And those that do find that it’s rarely the best use of their human resources and creativity.) Outsourcing enterprise software development almost always makes more sense. Here’s why:",
            content: [
                "Speed. Hiring an enterprise software development company ensures you can begin using your software much sooner.",
                "Reducing this wait time means you’re able to increase productivity and begin scaling up sooner rather than later.",
                "Support. Enterprise software development comes backed by developer support. This means you have a safety net, should something go wrong. Creativity. It’s helpful to have additional vantage points outside of your organization.",
                "This leads to increased creativity and minimizes the risk of blind spots.",
                "Cost. Paying salaried software developers is expensive. By outsourcing, you only pay for the projects you need. This is a far more cost-effective approach."
            ]
        }
    ]

    const fifth = null

    const sixth = null

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
        title: "Contact DEV.co",
        content: [
            "Our DEV.co team specializes in custom enterprise software development, design, and engineering services. Please connect with our corporate software development teams to assist in your company’s next big idea.",
            "We look forward to helping you develop and optimize for the future!"
        ]
    }

    const tenth = null

    return (
        <Industry first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;