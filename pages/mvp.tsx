import * as React from "react";
import Service from "@/components/services";

const Page = () => {
    const first = {
        title: "Minimum Viable Product (MVP) Software Development",
        content: [
            "Many software developers and entrepreneurs spend too much time thinking about how big, complex, or comprehensive they can build a product. In reality, it's often better to focus on building a smaller product—the minimum product that can still be viable to solve a user problem.",
            "At DEV.co, we offer minimum viable product (MVP) software development services, designed to get you the best possible app in the shortest possible timeframe. Let's look at why this is important."
        ]
    }

    const second = {
        title: "What Is a Minimum Viable Product?",
        description: [""],
        content: [
            "A minimum viable product (MVP) usually refers to software; it's a product that has the smallest number of features possible while still addressing a user need. Rather than packing an app full of extra features and impressive performance potential, you'll focus on cutting out the features you don't need and keeping your app lean."
        ]
    }

    const third = [
        {
            title: "There are many benefits to this approach, including:",
            description: [],
            content:
                [
                    {
                        title: "Launch speed",
                        content: "Simpler apps launch faster—it's that simple. If you're building an MVP, you'll put together a prototype and go live in a shorter amount of time. That means a faster path to getting funding, generating revenue, and learning about your customers."
                    },
                    {
                        title: "App complexity",
                        content: "Minimum viable products have fewer moving parts (so to speak), so there's less room for things to go wrong. MVP development is a way to decrease your risks."
                    },
                    {
                        title: "Early testing",
                        content: "Sometimes, developers don't realize the issues with an idea until they're already weeks into development. But with MVP development, you'll have the opportunity for early testing and reconsidering, so you can end up with a better product."
                    },
                    {
                        title: "Cost",
                        content: "MVP development is faster, and it requires fewer resources, so of course, it costs less; this is ideal if your primary goal is profitability."
                    },
                ]
        },
        {
            title: "The Core Tenets of MVP Services",
            description: [
                "High-quality minimum viable product developers will focus on these main priorities:"
            ],
            content:
                [
                    {
                        title: "Problem-solving",
                        content: "A minimum viable product still must be “viable,” meaning it should effectively solve some kind of problem."
                    },
                    {
                        title: "Minimalism",
                        content: "The app should also be as light and agile as possible, with only the features it truly needs to work. Superfluous or unnecessary features should be cut or saved for later."
                    },
                    {
                        title: "Functionality",
                        content: "Minimalism is no excuse for taking shortcuts. MVP software products still need to be consistently functional, with no bugs or technical issues to stand in the way of their effectiveness."
                    },
                    {
                        title: "Flexibility/scalability",
                        content: "A product may launch with minimalism, but it needs room to grow and evolve over time. MVPs should be developed with flexibility and scalability in mind."
                    },
                ]
        }
    ]

    const forth = null

    const fifth = null

    const sixth = {
        title: "How We Build Functional Apps Fast",
        description: [
            "At DEV.co, we develop MVP apps with the following agile process:"
        ],
        content: [
            {
                title: "Discovery and strategy",
                content: "Before we can start developing, we need to know what problems you're trying to solve. Together, we'll learn more about your brand, your objectives, and we'll set a strategy for the future."
            },
            {
                title: "Prototyping",
                content: "From there, we immediately move into prototyping. We'll design and develop a framework that accomplishes your goals."
            },
            {
                title: "Refinement and testing",
                content: "We'll move directly into refinement and testing, with the goal of launching as quickly as possible."
            },
            {
                title: "Launch and ongoing support",
                content: "After launch, we'll provide maintenance and updates as needed, and we can discuss the future possibilities for your app."
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
        title: "Contact With DEV.CO",
        content: [
            "Want to design a minimum viable product (MVP) for your startup?",
            "Or do you need to launch some new software as quickly as possible?",
            "Contact DEV.co today for a free quote, or a free consultation!"
        ]
    }

    const tenth = null
    
    return (
       <Service first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;