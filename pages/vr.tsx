import * as React from "react";
import Technology from "@/components/technologies";

const Page = () => {
    const first = {
        title: "Extended Reality (AR/VR) Development Services",
        content: [
            "With the dawn of extended reality, customers and decision-makers are thinking about their purchases in fundamentally new ways. With the right augmented reality (AR) and virtual reality (VR) technologies on your side, you can provide your customers a reality-bending experience, and find new ways to accomplish your goals.",
        ]
    }

    const second = {
        title: "What Is Extended Reality (AR/VR)?",
        description: [
            "Extended reality refers to technology that provides users with an experience that alters, extends, or reconstructs the “reality” they experience. ",
            "Often incorporating both sights and sounds, extended reality can transport users to new worlds or modify how they see the “real” world around them.",
        ],
        content: [
            "The notable examples of extended reality are augmented reality (AR) and virtual reality (VR). In augmented reality, users make use of glasses, screens, or other devices that provide an overlay of new visual or sonic elements over the reality.",
            "In virtual reality, users are fully immersed (usually with the help of a headset) in a new visual and auditory experience. You may also hear of a “mixed reality” (MR) experience, which hybridizes AR and VR.",
            "Depending on your goals, you can use extended reality to showcase new products, guide users on virtual tours, inform the public about a physical environment, or provide a pure entertainment experience. There’s almost no limit to what you can do.",
        ]
    }

    const third = [
        {
            title: "How to Choose an Extended Reality Developer",
            description: [
                "Your extended reality experience’s quality and reception will depend on the quality of your extended reality developer, as well as the partnership you choose to form with them. Your most important considering factors should be:"
            ],
            content:
                [
                    {
                        title: "Quality",
                        content: "Does this extended reality developer produce quality work? Do they have a team of qualified, experienced developers who can sculpt the kind of experience you want to provide? Will they provide high levels of testing and quality control?"
                    },
                    {
                        title: "Resources/capacity",
                        content: "What size team do they work with, and what are their capacity limits? Do you have a tight deadline you’re trying to meet?"
                    },
                    {
                        title: "Communication",
                        content: "How does this partner communicate with you? Do they treat your extended reality project as collaborative?"
                    },
                ]
        },
    ]

    const forth = [
        {
            title: "Extended Reality Development Services",
            description: "Our extended reality development services include:",
            content: [
                "Augmented reality development",
                "Virtual reality development",
                "Product design consultations",
                "AR/VR technology consultations",
                "Extended reality product setup and deployment",
                "Extended reality integration in existing systems",
            ]
        }
    ]

    const fifth = {
        title: "Our Extended Reality Development Process",
        description: [
            "At DEV.co, we understand that every extended reality development project is unique.",
            "That’s why we follow a guiding process to help us develop the right product for each partner."
        ],
        content: [
            {
                title: "Identification and analysis",
                content: "We start by understanding your extended reality goals, and analyzing the best path forward."
            },
            {
                title: "Collaborative workshopping",
                content: "Next, we begin workshopping ideas, working with you in a collaborative process to come up with the best possible AR or VR product."
            },
            {
                title: "Design and development",
                content: "Once we’ve outlined our project scope, we begin designing and developing the core extended reality experience. This is followed by an exhaustive round of testing."
            },
            {
                title: "Launch",
                content: "Once fully tested, it’s time to launch."
            },
            {
                title: "Testing",
                content: "After the web application is completed, we’ll thoroughly test the app to make sure it works as intended."
            },
            {
                title: "Correction and support",
                content: "Launch isn’t the end of the line; we continue to provide our extended reality clients with ongoing support."
            },
        ]
    }

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
        title: "Contact With DEV.CO",
        content: [
            "Are you interested in improving your business or nonprofit organization with extended reality? Or do you have more questions about how AR and VR can benefit you?",
            "Contact DEV.co today for a free quote, or a free consultation!",
        ]
    }

    const tenth = null

    return (
        <Technology first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;