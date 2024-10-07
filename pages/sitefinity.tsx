import * as React from "react";
import Skill from "@/components/skills";

const Page = () => {
    const first = {
        title: "Sitefinity Development Services",
        content: [
            "Sitefinity isn’t perfect, but it goes toe-to-toe with any other CMS platform on the market.",
            "And for businesses willing to pay a premium, it can supply everything they need (and much more)."
        ]
    }

    const second = {
        title: "Sitefinity Development & Consulting",
        description: [],
        content: [
            "Need help developing a website using Sitefinity? Need consulting help to take an existing website and transform it into a conversion-producing machine?",
            "We have a team of skilled Sitefinity developers and Sitefinity consultants standing by ready to serve you in whatever capacity you need."
        ]
    }

    const third = {
        title: "Why Choose Sitefinity Development?",
        description: [
            "With so many free CMS options out there, why would anyone go with an expensive option like Sitefinity?",
            "Well, if we’re being honest, people like it because it puts most other CMS platforms to shame.",
            "Companies like Coca-Cola and Mercedes Benz use Sitefinity to power their websites – and for good reason.",
            "Here are some of the benefits you get when you develop a website using this industry-leading CMS:"
        ],
        content: [
            {
                title: "Extremely user-friendly",
                content: "Sitefinity is very user-friendly and intuitive. Even if you plan to outsource the development to another company (like us!) you’ll rest easy knowing you can easily go in and make updates and changes whenever you see fit."
            },
            {
                title: "Strong mobile support",
                content: "Sitefinity has always been one of the leaders in the mobile charge. They make it easy to manage your website in a highly responsive manner that delivers a clean and consistent user experience, regardless of the device or screen size."
            },
            {
                title: "Built-in email campaign management",
                content: "With a drag-and-drop email designer built into the Sitefinity system, creating custom emails and managing email campaigns is easier than ever. No need to use multiple programs!"
            },
            {
                title: "Naturally SEO-friendly",
                content: "What good is your website if nobody can find it? Sitefinity is naturally SEO-friendly and websites tend to rank well when the right strategy is implemented."
            },
        ],
        other: [],
        additional: ""
    }

    const forth = {
        title: "The DEV.co Sitefinity Development Process",
        description: [],
        content: [
            {
                title: "Discover",
                content: "Our process begins by discovering what your company is all about. We’ll do extensive research to uncover your goals and objectives so that we can create a website that drives conversions and outperforms the competition."
            },
            {
                title: "Develop",
                content: "During the development phase, our Sitefinity development team buckles down and gets to work. This is the nitty-gritty part of the process!"
            },
            {
                title: "Execute",
                content: "Now it’s time for us to roll up our sleeves and get dirty. We’ll get busy executing so that we can quickly provide you with a usable version to gather feedback."
            },
            {
                title: "Test",
                content: "With a website ready to go, we begin testing and optimizing so there are no major errors, bugs, or flaws at rollout."
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
            "At Dev.co, we love when clients come to us with requests for Sitefinity websites. We believe it’s one of the best CMS platforms on the market and would love to leverage it to help you achieve your business objectives.",
            "Contact us to learn more!"
        ]
    }


    const eighth = {
        title: "Interesting Facts About Sitefinity",
        content: [
            "Sitefinity is a content management system and digital marketing tool designed for enterprises. It’s known for being extremely lightweight and user-friendly.",
            "Sitefinity integrates CMS with ecommerce to create a cohesive ecosystem for businesses.",
            "An estimated 1.28 million websites currently use Sitefinity.",
            "The United States is the largest user base of Sitefinity with more than 813k websites. The United Kingdom comes in second with more than 23k websites.",
            "The most popular industry verticals for Sitefinity include computers and electronics, arts and entertainment, adult, and finance.",
            "Sitefinity utilizes Azure Cognitive Cloud’s artificial intelligence (AI) and machine learning (ML) brain to improve functionality and help businesses understand and predict points of friction in their websites.",
            "Sitefinity comes backed by a robust analytics platform that can be personalized and optimized on a user by user basis to show the best and most valuable insights."
        ]
    }

    const nineth = null

    return (
        <Skill first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} />
    )
}

export default Page;