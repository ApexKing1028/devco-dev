import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "Netsuite Development Services",
        content: [
            "Netsuite provides high quality, Software-as-a-Service (SaaS) infrastructure for all your business’s needs.",
            "With experience across industries including professional services, wholesale and distribution, manufacturing, and more, Dev.co’s Netsuite development services can boost your business’s efficiency and maximize value across all aspects of your operation.With experience across industries including professional services, wholesale and distribution, manufacturing, and more, Dev.co’s Netsuite development services can boost your business’s efficiency and maximize value across all aspects of your operation.With experience across industries including professional services, wholesale and distribution, manufacturing, and more, Dev.co’s Netsuite development services can boost your business’s efficiency and maximize value across all aspects of your operation."
        ]
    }

    const second = {
        title: "What Is Netsuite?",
        description: [],
        content: [
            "NetSuite is today’s top Enterprise Resource Planning (ERP) software, designed for maximum flexibility across a wide range of functions, from eCommerce to business intelligence – and this flexibility is its primary appeal.",
            "Because it’s built for the cloud, NetSuite is easy to scale up as your business grows, and the system comes outfitted with development tools and resources for building industry-specific applications."
        ]
    }

    const third = {
        title: "The DEV.co NetSuite Development Services",
        description: [
            "How can Dev.co support your business’s NetSuite development needs? We focus on building out quality services from across your business’s lifecycle, including the following:"
        ],
        content: [
            {
                title: "Financial Management And Planning",
                content: "Across the board, NetSuite’s ERP is designed to provide operational visibility so that your business can take advantage of new opportunities as they come your way. In order for that to be possible, you need a clear sense of your financial picture, including modeling capabilities, budgeting, analysis, and reporting."
            },
            {
                title: "Order Management",
                content: "What happens when your business receives an order? Depending on the products you offer, maybe it’s a simple process - a customer orders a list of products and you pack them up and shift them out. Or maybe you offer made-to-order products requiring a longer process, from quote to confirmation, fulfillment and invoicing. Whatever your system demands, NetSuite’s system can prevent order bottlenecks, helping you complete orders quickly."
            },
            {
                title: "Supply Chain Management",
                content: "Supply chain management is critical to business success, yet these systems become more complex all the time. Keep track of where your products come from, where they’re needed, and ensure just in time delivery and minimized stress on your warehouse system."
            },
            {
                title: "Warehousing And Fulfillment",
                content: "Speaking of warehouses, NetSuite’s ERP excels at warehouse management and fulfillment, allowing your business to optimize space usage and minimize costs. Data-driven warehousing also enables faster order fulfillment; as with other parts of the NetSuite ecosystem, its warehousing and fulfillment functions let you see the big picture so that your business operates efficiently and generates the greatest profits."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "How We Develop For NetSuite",
        description: [],
        content: [
            {
                title: "Multi-platform Integrations",
                content: "At Dev.co, we know just how powerful NetSuite can be - and we also know that it works best in conjunction with other systems. That’s why, when we develop for NetSuite, we emphasize multi-platform integrations, pairing NetSuite with such applications as Avalara, Jitterbit, Magneto, and Salesforce, among many others. Taken together, these platforms allow your business to see the big picture. At Dev.co, we know just how powerful NetSuite can be - and we also know that it works best in conjunction with other systems. That’s why, when we develop for NetSuite, we emphasize multi-platform integrations, pairing NetSuite with such applications as Avalara, Jitterbit, Magneto, and Salesforce, among many others. Taken together, these platforms allow your business to see the big picture."
            },
            {
                title: "Developer Tools",
                content: "The next step is to create a plan that allows us to take you from where you are. In addition to NetSuite’s many integrations, at Dev.co we use NetSuite’s Suite Cloud developer tools to build your company’s web services, create a range of analytics frameworks paired with high-value KPIs, and supply real-time data and easy to use reporting tools. Simply put, we make sure everything you need is at your fingertips to where you want to be. If Node.js can help us get there, great! If not, we’ll suggest another platform."
            },
            {
                title: "Netsuite Development Services",
                content: "NetSuite is a powerful ERP, designed to take your business to the next level, but you can’t expect to take that leap all on your own. That’s why you need Dev.co’s NetSuite Development Services. We bring extensive experience and intimate knowledge of NetSuite’s capabilities to every project - because the right tools open up a world of opportunities. Where will NetSuite take your business?"
            },
        ]
    }

    const fifth = null

    const sixth = [
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
            title: "Deliver & Integrate",
            content: "Brand book & styleguide Print integration Online & mobile Further brand extension"
        }
    ]

    const seventh = {
        title: "Contact us today and we’ll be happy to discuss in further detail",
        content: [
            "Want to learn more about how Dev.co can help your business leverage NetSuite to reach your goals?"
        ]
    }


    const eighth = {
        title: "Interesting Facts About NetSuite",
        content: [
            "Evan Goldberg founded NetSuite in 1998, under the name NetLedger. Originally, NetSuite was a cloud-based accounting management program.",
            "Both Evan Goldberg and Zach Nelson, who joined NetSuite as CEO in July 2002, previously worked for Larry Ellison, the co-founder and CTO of Oracle. Ellison was one of the company’s original investors, offering $125 million in startup capital in 1998.",
            "NetSuite made history as the first cloud computing company. It predates Salesforce by about one month.",
            "NetSuite is the largest cloud Enterprise Resource Planning system, serving over 40,000 customers around the world.",
            "NetSuite is headquartered in San Mateo, California.",
            "Though NetSuite has primarily developed its own services, the company has also acquired nine other software companies since 2008, allowing it to offer a comprehensive software suite. NetSuite’s acquiitions include LightCMS, Monexa, TribeHR, and Retail Anywhere.",
            "NetSuite offers five primary product categories: Enterprise Resource Planning, Customer Relationship Management, E-commerce, Professional Services Automation, and Enterprise Performance Management.",
            "NetSuite was acquired by Oracle in July 2016. Despite this, NetSuite operates independently as a Global Business Unit and is still led by its original management team.",
            "As part of their commitment to supporting non-profit services, NetSuite donates their non-profit solution with no-cost activation to qualifying organizations.",
            "Netsuite’s solutions serve a wide range of businesses and non-profits. Some of their clients include the famed comedy club The Second City, the food and agriculture cooperative Land O’Lakes, microloan non-profit Kiva, and the cosmetics company, e.l.f.",
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;