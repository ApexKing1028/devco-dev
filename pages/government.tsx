import * as React from "react";
import Industry from "@/components/industries";

const Page = () => {
    const first = {
        title: "Software Development for Government",
        content: [
            "Over the past few years, the notion that government entities are slow, bogged down, and unresponsive has quickly been replaced with a new reality. It’s a reality where agileness and modernity are now the operative words.",
            "What caused this sudden shift? Growth and adoption of new software is certainly one relevant factor. And if you want your department or organization to continue improving, it’s imperative that you contract with the right custom software engineering company – one that can satisfy each of your civic, state, or federal requirements.",
        ]
    }

    const second = {
        title: "Why Government Entities Need Custom Software Development",
        description: [""],
        content: [
            "Government entities – whether at the civic, state, or federal level – are unique in that they have to account for a myriad of factors that private businesses don’t traditionally have to face. ",
            "Intensive security requirements, extensive bidding processes, and careful vetting mean only a handful of software developers are qualified. And the ones that are must be able to offer a diverse array of solutions."
        ]
    }

    const third = [
        {
            title: "Common Types of Government Software",
            description: [
                "Every government entity has its own unique needs and applications.",
                "Popular technologies used by government entities include Python,Java, C#, Javascript, SQL, HTML, jQuey, sql-server, C++, and CSS.",
                "State and local governments often need software that’s able to perform functions like:"
            ],
            content:
                [
                    {
                        title: "Collecting and sharing data with the public",
                        content: ""
                    },
                    {
                        title: "Uncovering opportunities for improving operations",
                        content: ""
                    },
                    {
                        title: "Planning and forecasting for budgeting purposes",
                        content: ""
                    },
                    {
                        title: "Careful financial reporting",
                        content: ""
                    },
                    {
                        title: "Administrative reporting",
                        content: ""
                    },
                    {
                        title: "Real-time monitoring of revenue, expenses and transactions",
                        content: ""
                    },
                ]
        },
    ]

    const forth = [
        {
            title: "State agencies and departments that benefit from custom government software include:",
            description: "Many of the cookie-cutter software solutions that private companies and organizations use will not work in government settings. They must be tailored to unique and complex requirements. And if the solution can’t be customized to the degree that it’s needed, a proprietary solution must be created from scratch.",
            content: [
                "Department of Administration",
                "Department of Health",
                "Department of IT",
                "Department of Health and Social Services",
                "Department of Health and Human Resources",
                "Department of Health Care  ",
                "Department of Transportation",
                "Economic Development Agencies",
                "Governor’s and Executive Offices",
                "Natural Resource and Environmental Agencies",
                "State Auditors, Comptrollers, and Treasurers",
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
        title: "Custom Software Engineering With DEV.co",
        content: [
            "At DEV.co, we’re proud to offer custom software engineering for civic, state and federal requirements.",
            "Government entities leverage our custom software development services to quickly implement the most advanced technologies for growth, compliance and cybersecurity.",
            "Interested in learning more? Don’t hesitate to contact us today.",
            "We’d be happy to walk you through our process and answer any questions you may have.",
        ]
    }

    const tenth = null

    return (
        <Industry first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;