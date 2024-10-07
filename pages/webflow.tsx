import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "Webflow Development Services",
        content: [
            "Our team are experts in designing and developing beautiful experiences using the Webflow platform.",
            "We have been building sites in Webflow since its early days. Whether you want to use a template, have your own design or want to build something from scratch, we are here to help."
        ]
    }

    const second = {
        title: "Webflow Design, Development & Consulting",
        description: [],
        content: [
            "Webflow is the growing platform of choice for novices and experts alike. It’s extensible interface allows our design team to create a beautiful interface on the Webflow platform and, once done, hand the reigns over to less technical personal in the general site and content management process. ",
            "Like many of the other content management systems on which our team designs, Webflow has some key benefits for webmasters and business owners alike:"
        ]
    }

    const third = {
        title: "Why Choose Webflow Design & Development?",
        description: [
            "Webflow is the growing platform of choice for novices and experts alike.",
            "It’s extensible interface allows our design team to create a beautiful interface on the Webflow platform and, once done, hand the reigns over to less technical personal in the general site and content management process.",
            "Like many of the other content management systems on which our team designs, Webflow has some key benefits for webmasters and business owners alike:"
        ],
        content: [
            {
                title: "Feature Rich",
                content: "As a standalone produce and without the need for custom application development, Webflow comes fully-loaded out of the box. That means there is little to no development needed once the beginning stages of the site have begun. Future builds and updates are also a breeze and the visual canvas editor allows for simple drag-and-drop creation of experiences."
            },
            {
                title: "Traffic at Scale",
                content: "Webflow hosting allows for users to acquire traffic at scale. So whether you have an existing site with many users or are planning to shortly launch one and drive paid traffic there, the Webflow hosting solution can aid in the scale and load without straining resources to the point that business continuity experiences interruption."
            },
            {
                title: "Ease of Use",
                content: "With built-in features that allow for easy content updates, Webflow allows designers to more quickly and easily interact with marketing teams without getting in the way. In addition, most out-of-the-box features provide for things like SEO and easy content and app integration updates."
            },
            {
                title: "Advanced Designs",
                content: "While the Webflow platform was built to handle and service the needs of less experienced users and designers, it doesn't mean that Webflow is missing features for a more robust website experience. To the contrary. Webflow is built for advanced interactions and animations, bringing together CSS and Javascript in a way that allows users to interact in ways not provided by other content builders."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "The DEV.co Webflow Development Process",
        description: [],
        content: [
            {
                title: "Discover",
                content: "Every Webflow development process begins with an tight focus on understanding your goals and needs on a business level. We want to get familiar with your operations, culture and strategy so we know how to best deliver stellar results."
            },
            {
                title: "Plan",
                content: "With a thorough understanding of your brand and business use case, our Webflow development team transitions into the planning phase. It’s during this process that we create a wireframe outline of your project in order to meet your project goals. Our methodology allows clients to be as involved or as hands-off as they would like."
            },
            {
                title: "Develop",
                content: "Now comes the fun part: developing your Webflow website. Once we have created the mock-ups, the move to full development of your Webflow site is typically much more rapid."
            },
            {
                title: "Test",
                content: "No Webflow website design & development process is complete without extensive testing and optimization. We will iterate through various tests to ensure you are completely pleased and happy with the final result."
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
        title: "Partner With Dev.co",
        content: [
            "Are you looking for a reliable Webflow development and design partner who can help you achieve your goals in minimal time and at a cost-effective price point?",
            "Contact us today and we’d be happy to answer any questions you might have."
        ]
    }


    const eighth = {
        title: "Interesting Facts About Webflow",
        content: [
            "Webflow is based in San Francisco, CA USA and was founded in 2013.",
            "Vlad Magdalin (creator of Intuit Brainstorm), Sergie Magdalin, and Bryant Chou (former CTO of Vungle) founded Webflow as they were seeking for an extensible CMS that filled an ease-of-design void in the market.",
            "Webflow generates HTML, CSS, and JavaScript automatically, allowing for more interactive experiences.",
            "The company is a YCombinator graduate.",
            "Accel lead the series A round in Webflow with a total series A investment of $72M.",
            "Investors include Accel, YCombinator, Khosla Ventures and Tim Draper.",
            "Direct competitors include Squarespace, Weebly and Wix.",
            "It is estimated that Webflow holds some 0.4% of market share where the site’s CMS is known."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;