import * as React from "react";
import Service from "@/components/services";

const Devops = () => {
    const first = {
        title: "DevOps Services",
        content: ["DevOps, a combination of “development” and “operations,” is a set of philosophies and processes meant to make it faster and more efficient to develop software. Unfortunately, implementing DevOps practices is a challenge for many existing businesses.", "At DEV.co, we offer DevOps as a service, providing you the DevOps tools, operations teams and a logistical gateway that allows you to achieve your software development goals."]
    }

    const second = {
        title: "What Is DevOps?",
        description: ["DevOps is a set of practices meant to align the goals of software development and operations teams. It's admittedly a somewhat nebulous term that's been used to describe a number of different practices, and different companies may have different philosophies."],
        content: ["However, all DevOps practices incorporate some form of continuous delivery—in other words, software delivery is streamlined and automated so that it can occur without interruption. DevOps also incorporates agile software development, allowing you to build and adapt new tools on the fly, and encourages collaboration between teams that might otherwise function independently."]
    }

    const third = null

    const forth = null

    const fifth = {
        title: "The Benefits of DevOps",
        description: [
            "DevOps offers several advantages, including:",
        ],
        content: [
            {
                title: "Faster time to market",
                content: "Faster software development lifecycle means you'll benefit from continuous delivery and a faster time to market. That means you'll collect user data and feedback sooner, and you'll establish a stream of revenue sooner."
            },
            {
                title: "Better communication and collaboration",
                content: "With an appropriate DevOps model in place, your team will master the arts of collaboration and communication. You'll be able to communicate ideas more clearly, and implement them more efficiently, ultimately resulting in less strain and more efficiency."
            },
            {
                title: "Improved software quality",
                content: "Implementing a DevOps culture also tends to produce better-finished products. Your operations teams will become more efficient in the way they manage infrastructure, how to implement configuration management, adapt to new information and communicate clearly between security teams and other stakeholders. With all the right DevOps tools to help with rapid deployment at a higher quality, you can expect DevOps success with each software project."
            },
            {
                title: "Efficient software development",
                content: "Thanks to agile development processes, your entire development team will better introduce automation, and a variety of tools meant to streamline software development, your IT team will work more efficiently—and you'll save money in the process."
            }
        ]
    }

    const sixth = {
        title: "The DEV.co DevOps Process",
        description: [
            "When we work with organizations, we follow an adaptive process that usually resembles the following:",
        ],
        content: [
            {
                title: "Analysis",
                content: "We start with an initial analysis of complex environments. Which application development tools are you currently using? How do your development and operations teams interact with each other? What are your biggest strengths and weaknesses in how your DevOps model deploy updates? What are your goals when it comes to integration and continuous delivery?"
            },
            {
                title: "Finding a solution",
                content: "Next, we devise a solution for DevOps workflows and DevOps lifecycle management. Depending on your needs, this typically includes a set of tools, resources, processes, and cloud computing workflows meant to achieve your goals."
            },
            {
                title: "Execution",
                content: "Next is execution. We'll help prepare your DevOps team and make sure all moving parts are functioning as intended, the right programming languages are used, standardized test processes are implemented and the entire DevOps journey is smooth."
            },
            {
                title: "Ongoing support",
                content: "We also provide ongoing support to our clients, ensuring our collaborative plan is working and making changes and improvements as necessary."
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
        title: "Partner with Dev.co",
        content: ["DevOps has the power to transform your organization above traditional software development practices, with faster time to market and more efficient development.", "Are you ready to embrace CI / CD ? Contact DEV.co today for a free quote, or a free consultation on improving your IT operations! Let's talk About Your Project"]
    }

    const tenth = null

    return (
       <Service first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Devops;