import * as React from "react";
import Service from "@/components/services";

const Page = () => {
    const first = {
        title: "UX/UI Design Consulting",
        content: [
            "User experience (UX) plays a direct role in retaining and converting website visitors. Users respond best to an effortless, intuitive experience. However, creating a seamless user experience requires more than having a beautifully designed website. An attractive design is only part of the equation. If you want your visitors to convert, you have to take them on a journey. That journey is guided by a strong user interface (UI).",
        ]
    }

    const second = {
        title: "UX/UI design nurtures the customer journey",
        description: [""],
        content: [
            "Website visitors who land on your site will be at varying points in the customer journey. Some visitors will be first-timers, while others will be familiar with your brand.",
            "A strong user interface makes it easy for any visitor at any point in the journey to find what they came for. When users can find what they came for, they’ll develop a positive impression of your brand."
        ]
    }

    const third = [
        {
            title: "Why invest in UX/UI design?",
            description: [],
            content:
                [
                    {
                        title: "Influence visitor behavior",
                        content: "Every aspect of UX/UI design – from colors to typography – can be used to influence visitor behavior. Do you want visitors to click on a link? Download a report? Watch a video? Sign up for a newsletter? Anything you want visitors to do can be guided by good UX/UI design."
                    },
                    {
                        title: "Eliminate barriers to conversion",
                        content: "Strong UX/UI design eliminates unnecessary barriers that stifle and divert otherwise easy conversions. Barriers can include poor navigation, cluttered design elements, intrusive popups that bombard return visitors, and elements that make a site hard to use."
                    },
                    {
                        title: "Deliver a branded experience online",
                        content: "Website visitors experience your brand through your user interface. If your website was built with a template, the user experience might not represent your brand. A custom UX/UI design will align the user experience with your brand."
                    },
                    {
                        title: "Clear calls to action",
                        content: "A strong UI/UX includes CTAs that align with your business goals. There are a variety of actions you can instruct visitors to take, but you need to focus on the actions that support your goals."
                    },
                ]
        },
    ]

    const forth = null

    const fifth = null

    const sixth = {
        title: "The DEV.co UX/UI design process",
        description: [],
        content: [
            {
                title: "Goal Identification",
                content: "The Dev.co UX/UI design process begins by understanding the goals, objectives, and constraints of your business."
            },
            {
                title: "Research & Discovery",
                content: "We’ll perform extensive research to find out what your visitors want and expect. We’ll also analyze your competitors and create an overall strategy to achieve your goals."
            },
            {
                title: "Prototyping",
                content: "Next, our innovative design team will craft a user interface prototype that represents your brand, aligns with your business goals, and delivers a satisfying, intuitive user experience."
            },
            {
                title: "Testing & Review",
                content: "You’ll review all concepts and strategies and test prototypes before anything is finalized."
            },
        ]
    }

    const seventh = [
        {
            title: "Strong UX/UI design by Dev.co delivers ROI",
            content: [
                "A great product with poor UX/UI won’t reach its full potential. Companies that haven’t invested in UX optimization are being eclipsed by competitors with UX/UI-optimized websites.",
                "In other words, you need intentional UX/UI design to generate ROI at your highest potential.",
                "Dev.co understands what it takes to create an exceptional user experience through a powerful user interface. Our team is committed to creating an exceptional, intuitive user experience for our clients."
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
        title: "Ready to launch a stellar user experience?",
        content: [
            "We want to partner with you to create a user experience your visitors will love.",
            "Contact us to discuss your project with a Dev.co UX/UI expert and let us help make your digital project a success.",
            ''    
        ]
    }

    const tenth = null
    
    return (
       <Service first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;