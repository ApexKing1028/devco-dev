import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "SolidWorks Development Services",
        content: [
            "The numbers stand on their own merit. More than 2 million users and 200,00 companies and organizations are relying on SolidWorks for their computer-aided design projects and engineering applications. The CAD and CAE software package, which is built for the Windows platform, has been around for more than two decades and has experienced 25 major releases.",
            "If you’re looking to add or switch to a new CAD package, SolidWorks should be at or near the top of your list. And at Dev.co, we’d be thrilled to provide SolidWorks development and engineering services for your next custom software development project."
        ]
    }

    const second = {
        title: "SolidWorks Development & Consulting",
        description: [
            "Whether you need help designing your next product, system, or part – or you’d like a second set of experienced eyes to follow along – our team is fully equipped to serve in whatever capacity you desire."
        ],
        content: [
            "At Dev.co, we offer industry-leading SolidWorks development and consulting services to clients across a variety of industries and niches.",
            "This includes businesses involved in precision machining, injection molding, sheet metal fabrication, weldments, aluminum and plastic extrusions, and even 3D printing."
        ]
    }

    const third = {
        title: "Why Choose SolidWorks?",
        description: [
            "SolidWorks is considered one of the premier CAD packages in the world.",
            "It has a massive user base, hundreds of thousands of loyal, lifetime customers, and a backend system that makes it easy to design, engineer, and innovate with ease. Some of the specific benefits include:"
        ],
        content: [
            {
                title: "Efficient design",
                content: "SolidWorks is a parametric design modular. This means it’s easy to edit your design at any stage in the design process. RealView graphics give our developer team the ability to visualize the design as we would in real time. (This also provides you with sophisticated renderings that you can share with your team at every stage of the process.)"
            },
            {
                title: "Built-in apps",
                content: "SolidWorks comes with a variety of built-in applications that are intended to simplify the complex. It features analytical tools, as well as design automation that can simulate a variety of physical behaviors (like stress deflection, vibration, or even fluid flow)."
            },
            {
                title: "Faster deliveraayPDM",
                content: "The SolidWorks Product Data Management (PDM) feature means all data is securely stored within one central repository. This makes it easy to return to earlier versions at any time."
            },
            {
                title: "Sharing",
                content: "Seamless collaboration is a major focal point of SolidWorks. All team members work within one shared data environment, which means less confusion, easier flow of information, and faster time to completion."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "The DEV.co SolidWorks Development Process",
        description: [],
        content: [
            {
                title: "Discovery",
                content: "Every SOLIDWORKS project begins with a deep dive into your goals and expectations for the project. By starting with the end in mind, we’re able to uncover some of the rich nuggets of information we need to develop a CAD design that meets and exceeds your standards."
            },
            {
                title: "Plan",
                content: "Good planning is a requirement in order to achieve successful outcomes with any SOLIDWORKS project. That’s why we take the time to develop a step-by-step plan on the front end."
            },
            {
                title: "Develop",
                content: "This is the phase that gets our Dev.com team really excited. We’re developers at our core and we love creating, designing, and building. Because of our experience with SOLIDWORKS, this stage of the process is typically very streamlined."
            },
            {
                title: "Test",
                content: "Finally, we go back and test/optimize according to a checklist of rigorous standards.This ensures you end up with a design that aligns with the vision we unearthed at the beginning of the process."
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
        title: "Partner With DEV.co",
        content: [
            "Whether you no longer have the time and internal resources to handle design work, or you need a more experienced SolidWorks development and engineering service to fill some of the voids in your processes, we can help.",
            "Contact Dev.co today to learn more!",
        ]
    }


    const eighth = {
        title: "Interesting Facts About SolidWorks",
        content: [
            "SolidWorks was founded in 1993 by Jon Hirschtick, who used the $1 million he made as a part of the MIT Blackjack Team to start the company.",
            "The first SolidWorks program was released in 1995.",
            "SolidWorks disciplines include 3D CAD, electrical design, PDM, simulation, 3DEXPERIENCE, and technical communication.",
            "SolidWorks is commonly used in aerospace, construction, and manufacturing.",
            "More than 240k companies rely on SSolidWorks.",
            "More than 3.24 million product designers and engineers worldwide use SolidWorks."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;