import * as React from "react";
import Industry from "@/components/industries";

const Page = () => {
    const first = {
        title: "Custom Software Development for Agriculture",
        content: [
            "From the outside looking in, people often assume the agricultural industry is old, archaic, and stubborn. But as you know, it’s actually one of the more sophisticated and technologically-advanced sectors of the American economy.",
            "And if you want to remain competitive in this crowded industry, you have to continually improve and iterate. Custom agriculture software can help you grow."
        ]
    }

    const second = {
        title: "Why Agriculture Companies Need Custom Software Development",
        description: [""],
        content: [
            "There are plenty of software solutions you can purchase “off the shelf,” but custom solutions can take you to the next level.",
            "That’s where our AgTech software developer services come in. We help AgTech firms with internal and external software development teams to help them scale their product, obtain funding or penetrate their market. "
        ]
    }

    const third = [
        {
            title: "Here are some of the reasons that leading agriculture companies pursue custom software development services:",
            description: [],
            content:
                [
                    {
                        title: "Flexible",
                        content: "When you purchase a product off the shelf, it’s designed with everyone in mind. So while it may provide useful functionality in some areas, it’s often far too generic to add widespread value. Custom software is tailored to your business, which makes it flexible and applicable across the board."
                    },
                    {
                        title: "Scalable",
                        content: "Rigid software is frustrating and expensive. As you grow, it requires you to continually reevaluate the solutions you need to expand - often necessitating a switch to a new solution and/or vendor. Custom agriculture software development is entirely scalable, which allows you to grow without worrying about the consequences"
                    },
                    {
                        title: "Proprietary",
                        content: "Any time you can develop intellectual property for your business, you’re adding value. The proprietary nature of custom software development gives you an intelligent advantage that can’t be easily replicated by the competition"
                    },
                    {
                        title: "Secure",
                        content: "When you’re in control of software development, you can engineer solutions that carefully protect your data and privacy at every touchpoint along the way."
                    },
                ]
        },
    ]

    const forth = null

    const fifth = null

    const sixth = {
        title: "Common Types of Agriculture Softwares",
        description: [
            "We understand that no two agriculture companies or farmers require the same solution.",
            "That’s why we work closely with you, the client, to tailor software to your specific wants, needs, objectives, and pain points.",
            "Here are some of the common types of software we develop for our clients:",
        ],
        content: [
            {
                title: "Precision agriculture software solutionss",
                content: "Precision agriculture software solutionss that help you analyze and manage your farm with precision technology (including scale precision smart farming apps, done solutions, precision data management, and soil sensors)."
            },
            {
                title: "Planning and workshopping",
                content: "Together, we’ll begin to plan and workshop various ideas."
            },
            {
                title: "Livestock management software solutions",
                content: "Livestock management software solution's that offer advanced analytics and suggestions for finances, breeding, and herd management."
            },
            {
                title: "Agriculture farm management solutions",
                content: "Agriculture farm management solutions and ERP solutions to help with accounting, crop planning, inventory, reporting, and equipment maintenance."
            },
            {
                title: "Aquaculture software solutions",
                content: "Aquaculture software solutionst that track your entire population for optimum breeding and harvesting. This includes aquaculture workflow and ERP integrations, sensor technology, fish farm management systems, data analysis, and more."
            },
            {
                title: "Dispensary software solutions",
                content: "Dispensary software solution's for cannabis farming. This includes seed to sale software, CRM solutions, tracking software, and even ecommerce solutions."
            },
        ]
    }

    const seventh = [
        {
            title: "What Does Farm Management Software do?",
            content: [
                "Farm management software helps farmers track their crops, soil conditions, and irrigation schedules. It can also help with planning for planting and harvesting times and keeping track of livestock. In some cases, agricultural software devolep can even be used to control machinery remotely.",
                "Farm management apps (farm accounting software) is an essential tool for any farmer, big or small. It can help save time and money by keeping track of all the critical aspects of running a farm. With so many different features and options available, there is sure to be a farm management software package that is right for you.",
            ]
        },
        {
            title: "What Makes Agriculture Software so Important? Agriculture Software Developer",
            content: [
                "The agricultural field has long relied on custom software solutions to help manage their businesses. Today, farm management apps is an essential tool for any agriculturist, large or small. Crop management software technologies helps farmers track planting, irrigation, and yield data, as well as forecast production and sales. It can also monitor field conditions, weather patterns, and market prices. Custom software development company like Dev. co software architecture specialize in creating tailored farm management and crop management software solutions that meet each client’s unique needs. With the right farm management software in your local area, farmers can optimize their operations for maximum efficiency and profitability.",
            ]
        },
        {
            title: "",
            content: [
                "All of our agriculture software solutions are designed to comply with USDA, FSIS, FDA, EPA, NPDES, and GHGRP requirements.",
                "Don’t see what you’re looking for?",
                "These are just examples. If you have a vision, we can develop it for you."
            ]
        }
    ]

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
        title: "Connect With Dev.co",
        content: [
            "For additional information on our custom agriculture software development services, don’t hesitate to reach out and contact us today! We look forward to getting to know you.",
        ]
    }

    const tenth = null

    return (
        <Industry first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;