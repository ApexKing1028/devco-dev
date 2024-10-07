import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "HTML5 Development Services",
        content: [
            "The technology that powers the world wide web is changing rapidly. Is your website up-to-date or is it falling behind?",
            "Experts agree that you’ve got about 15 seconds to capture a visitor’s attention before they’ll bounce. If you want your web page to stand out from your competition and actively engage your visitors, it’s time to harness the power of HTML5."
        ]
    }

    const second = {
        title: "The Dev.co advantage",
        description: [],
        content: [
            "We deliver outstanding, cross-platform HTML5 applications for desktop and mobile devices that will impress and engage your website visitors. Our expert developers work with businesses, startup companies, and individuals in a variety of industries. Using the latest tools, we deliver robust, custom HTML5 solutions that align with and support your goals."
        ]
    }

    const third = {
        title: "Why people choose Dev.co for HTML5 development",
        description: [
            "At Dev.co, our innovative front end developers are experienced in creating dynamic, feature-rich HTML5 applications for the web including mobile devices. We build secure, sustainable HTML5 solutions that will easily scale to meet your growing needs.",
            "All HTML5 applications built by Dev.co are created to the highest security and industry standards. When you choose Dev.co as your HTML5 developer, our experts have a proficient understanding of dynamic custom web applications that engage users across any device or operating system.",
            "At Dev.co, we pride ourselves on our ability to deliver custom web development projects that meet your specific needs.",
            "Before we begin development, we’ll conduct an in-depth analysis of your goals and IT requirements/restraints to make sure your HTML5 project is cost-effective and completed on time."
        ],
        content: [
            {
                title: "We prioritize communication and client satisfaction",
                content: "We want our clients to participate in the development of their projects. At Dev.co, we take a collaborative approach to HTML5 development and prioritize client satisfaction."
            },
            {
                title: "We prioritize communication",
                content: "Communication is crucial for the success of your project. We’ll keep you in the loop throughout the entire development process so you can provide feedback along the way."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = null

    const fifth = [
        {
            title: "What is HTML5?",
            content: [
                "HTML5 is an advanced evolution of Hypertext Markup Language (HTML).",
                "HTML5 utilizes HTML, CSS, JavaScript, and XHTML to support a rich user extensive experience cross-platform.",
                "Unlike previous technologies, HTML5 functions without requiring the user to download and install software.",
                "HTML5 can be used to:"
            ],
            other: [
                "Create stunning animations",
                "Create dynamic mobile apps",
                "Create complex browser-based applications",
                "Create web applications that function offline",
                "Relay geolocation data to web pages",
                "Make other content on a webpage editable in the browser",
                "Create drag-and-drop uploads",
                "Embed mathematical formulas",
                "Push events to the client rather than waiting to respond to a client-side request",
                "Leverage a browser’s stylesheet instead of having to use style properties in JavaScript",
                "Stream HD video and high-quality graphic design",
                "Create a dynamic user experience for all platforms",
            ]
        },
        {
            title: "Create a dynamic user experience for all platforms",
            content: [
                "More than half of all website visits come from a mobile device. HTML5 for mobile development will enrich the interactive experience on mobile devices. Currently, all major browsers support HTML5, and it’s only a matter of time before all browsers support this leading technology.",
            ],
            other: []
        },
        {
            title: "HTML5 for iOS",
            content: [
                "HTML5 delivers dynamic web experiences to mobile and desktop users on any iOS device, making HTML5 perfect for iOS app development."
            ],
            other: []
        }
    ]

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
        title: "Get in touch with DEV.co – let’s talk about your project",
        content: [
            "We want to partner with you on your custom HTML5 project!",
            "Contact us today to discuss your project and start using HTML5 to impress and convert your website visitors."
        ]
    }


    const eighth = {
        title: "Interesting Facts About HTML5",
        content: [
            "HTML5 with XML syntax replaced XHTML.",
            "HTML5 won’t replace flash and Silverlight completely, but it shares many of the same general capabilities.",
            "Developers are using HTML elements to create modern products designed to fix cross browser compatibility issues.",
            "HTML5 wasn’t created to replace flash; it was created to make a better HTML standard. It just took a while for the W3C to accept it. Opera and Mozilla sent a proposal to the W3C for a new set of standards in 2004, which was rejected. However, in 2006, the proposal was accepted and HTML5 was created."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;