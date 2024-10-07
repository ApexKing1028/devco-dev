import * as React from "react";
import Industry from "@/components/industries";

const Page = () => {
    const first = {
        title: "Software Development for Marketing",
        content: [
            "The success of every marketing campaign depends on a number of factors including reaching the right market, using convincing messages, and utilizing advanced marketing strategies. While all of these factors are important, they couldn’t be executed without marketing software",
            "Email marketing campaigns, programmable ads, SEO tools, lead generation software, and CRM solutions are all critical tools for implementing a successful digital marketing strategy. These software tools are used by thousands of marketers from novice to expert",
            "If your mission is to create cutting-edge, powerful, secure marketing software that gets results for your clients, you need a high-tech software development team like Dev.co.",
        ]
    }

    const second = {
        title: "The Advantages of Agile Application Development",
        description: [""],
        content: [
            "At DEV.co, we develop web applications using agile software development methodologies. Agile philosophies allow us to develop web applications as a collaborative effort, relying on client feedback and direction throughout the process. This process is also iterative; web applications evolve gradually, and we incorporate new ideas as we discover them during the process.",
        ]
    }

    const third = null

    const forth = [
        {
            title: "Dev.co can help with the following custom marketing software projects:",
            description: "",
            content: [
                "Mobile marketing software",
                "Display & programmable ad delivery", 
                "Search tools for SEO",
                "Software for displaying native content ads",
                "Marketing automation software",
                "Lead generation/management software",
                "Marketing automation software",
                "CRM solutions",
                "Content marketing software",
                "Interactive content for web & mobile",
                "Video marketing software",
                "Marketing analytics software",
                "Webinar software",
                "eCommerce marketing tools",
                "Sales automation",
                "Data integration",
                "Project & workflow applications",
                "And more!",
            ]
        }
    ]

    const fifth = null

    const sixth = {
        title: "You need custom, reliable, secure marketing software",
        description: [
            "Reliable, secure software is the backbone of every successful marketing campaign. Professional marketers want software that won’t be an easy target for hackers and performs its promised functions. At Dev.co, we take cybersecurity seriously and we build software with clean, functional code.",
        ],
        content: [
            {
                title: "We’ll upgrade existing software",
                content: "Do you have cybersecurity concerns about your existing software? Do the software’s analytics reports seem slightly inaccurate, but you’re not sure why? We’ll find and fix bugs and design flaws to ensure you’re providing clients with software that meets their expectations."
            },
            {
                title: "Can your marketing software deliver? Ours can",
                content: "At Dev.co, we develop custom software solutions for marketing companies who want the best for their clients. We have years of experience working with MarTech companies developing custom solutions that set our clients apart from the competition. Whether you need upgrades to existing software or you’d like to start from scratch, we can help."
            },
            {
                title: "We’ll create custom software with familiar features",
                content: "Do you need an email marketing system that functions similarly to an existing popular program? We can create a custom application utilizing as many or as little features as you need. Want an innovative feature you don’t see anywhere else? Want us to improve on a popular feature? Tell us your idea and we’ll see how we can make it work."
            },
            {
                title: "Make Dev.co your custom software development partner",
                content: "If you’re ready to build world-class software applications that will make your clients rave, you’re in good hands with Dev.co. Our development team will work closely with you to learn about your business and pinpoint your specific needs and technical constraints (if any). We’ll create a strategy for developing your project in phases that allow for frequent feedback. After each review phase, we’ll implement your feedback as quickly and accurately as possible"
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
        title: "Your marketing clients deserve the best – contact us today",
        content: [
            "If you’re ready to build an application your clients will love, contact us to discuss your project in-depth.",
            "We’d love to be your software development partner."
        ]
    }

    const tenth = null
    
    return (
        <Industry first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;