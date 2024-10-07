import * as React from "react";
import Service from "@/components/services";

const Page = () => {
    const first = {
        title: "Software Development Staffing Company",
        content: ["One of the biggest challenges in software development (and IT) is finding the skilled, experienced professionals necessary to see your project to completion.", "There 's a talent shortage in the tech world, and recruiting takes both time and money. That's why many organizations are turning to software development staffing companies to fulfill their staffing needs."]
    }

    const second = {
        title: "The Benefits of Hiring a Software Development Staffing Company",
        description: [""],
        content: ["Hiring a software development staffing company yields multiple benefits simultaneously:"]
    }

    const third = [
        {
            title: "",
            description: [],
            content:
                [
                    {
                        title: "Save time",
                        content: "First, a staffing agency will save you time. Rather than investing countless hours into a recruiting strategy that may or may not pay off, you can develop a recruiting strategy with a staffing firm and let them take care of most of the grunt work. Instead, you can focus your efforts where they're needed most."
                    },
                    {
                        title: "Save money",
                        content: "It may seem counterintuitive, since you' ll typically need to pay for staffing services, but a software development staffing company can help you save money. You'll face less overhead, since you'll be able to thrive with fewer full-time, onsite software engineers, and you can reduce overall labor costs dramatically."
                    },
                    {
                        title: "Get access to top talent",
                        content: "At the same time, a software development staffing company helps you get access to some of the best talent in the industry. Whatever skill sets you're looking for, you'll be able to find worthy candidates who give you what you need. Depending on the complexity of the project you're working on, this may be the best way to find the talent you require."
                    },
                    {
                        title: "Cover all your skilled needs",
                        content: "A software development staffing company will have access to people with complex skills and experience in fields like ML, IoT, the blockchain, AR, VR, and more. You'll also get access to candidates with specific experience in various industries, like healthcare, manufacturing, and real estate."
                    }
                ]
        },
    ]

    const forth = null

    const fifth = {
        title: "How to Choose a Software Development Staffing Company",
        description: [
            "Of course, not all software development staffing companies are created equal.",
            "When searching for a potential staffing partner, make sure you consider:"
        ],
        content: [
            {
                title: "Experience",
                content: "Valuable IT and software development staffing companies have plenty of experience. They understand the core needs of most of their clientele, and can anticipate the usual barriers to success."
            },
            {
                title: "Speed",
                content: "Even if your project isn't time-sensitive, you'll still want a partner who can get you the staff members you need as quickly as possible. That way, you can get results faster—and potentially start generating revenue faster."
            },
            {
                title: "Access",
                content: "What kinds of talent is this staffing agency able to secure? Do they have access to people in a variety of different niches? What are your needs?"
            },
            {
                title: "Communication",
                content: "A good staffing partner will collaborate with you, and collaboration demands effective communication. Is it easy to talk with this partner, and discuss your vision?"
            }
        ]
    }

    const sixth = {
        title: "How to Choose a Software Development Staffing Company",
        description: [
            "Of course, not all software development staffing companies are created equal.",
            "When searching for a potential staffing partner, make sure you consider:"
        ],
        content: [
            {
                title: "Experience",
                content: "Valuable IT and software development staffing companies have plenty of experience. They understand the core needs of most of their clientele, and can anticipate the usual barriers to success."
            },
            {
                title: "Speed",
                content: "Even if your project isn't time-sensitive, you'll still want a partner who can get you the staff members you need as quickly as possible. That way, you can get results faster—and potentially start generating revenue faster."
            },
            {
                title: "Access",
                content: "What kinds of talent is this staffing agency able to secure? Do they have access to people in a variety of different niches? What are your needs?"
            },
            {
                title: "Communication",
                content: "A good staffing partner will collaborate with you, and collaboration demands effective communication. Is it easy to talk with this partner, and discuss your vision?"
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
        title: "Software Development Staffing: A Partnership",
        content: ["At DEV.co, we see software development and IT staffing as a partnership.", "It's our job to help you achieve your goals, whatever they may be.", "If you're interested in learning more about our staffing process, or if you're ready for a free quote on our IT staffing services, contact us today!"]
    }

    const tenth = null

    return (
       <Service first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;