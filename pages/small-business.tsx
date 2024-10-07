import * as React from "react";
import Industry from "@/components/industries";

const Page = () => {
    const first = {
        title: "Small Business Custom Software Development Services",
        content: [
            "The small business world is more competitive than it’s ever been. And along with this competition comes the need for rapid technological innovation and adoption.",
            "Sometimes canned solutions and off-the-shelf software can do the job. But for businesses that have unique needs, requirements, and objectives, custom software is the way to go."
        ]
    }

    const second = {
        title: "Why Small Businesses Need Custom Software",
        description: [""],
        content: [
            "Typically, small businesses find software they want and then modify their business model or strategy in order to align with the specific platform they select.",
            "Custom software, on the other hand, is tailored to the specific needs of your business. This means there’s no need to adjust your business model or strategy.Custom software, on the other hand, is tailored to the specific needs of your business. This means there’s no need to adjust your business model or strategy."
        ]
    }

    const third = null

    const forth = [
        {
            title: "Benefits of software development for small businesses include:",
            description: "",
            content: [
                "The ability to automate repetitive processes, which frees up time to focus on value-adding tasks like sales and innovation.",
                "Makes it easier to scale and expand your business over time without having to worry about the impact it has on your relationship with software vendors.",
                "Streamlined business processes and more efficient tasks.",
                "Custom software can improve your communication - both internally with employees and externally with customers. This maximizes productivity and enhances your brand image.",
            ]
        }
    ]

    const fifth = {
        title: "Common Types of Small Business Software",
        description: [
            "The beauty of custom software development for small business is that you can have any type of software developed to fit your specific needs – regardless of whether it fits into a predefined category or not. Having said that, here are some of the common types of small business software companies frequently request:",
        ],
        content: [
            {
                title: "Customer-facing applications",
                content: "For many small businesses, customer-facing applications and software can strengthen customer loyalty and/or provide an additional stream of revenue."
            },
            {
                title: "Human resources",
                content: "Software can help your HR team manage the hiring process, implement smother onboarding, reduce paperwork, assess skills, and even manage conflict between employees."
            },
            {
                title: "Communication",
                content: "Need a solution that helps your team communicate. Whether you want a streamlined chat application, a dedicated email software, or secure video calling app, custom software is the way to go."
            },
            {
                title: "CRM",
                content: "Sales and marketing solutions, like customer relationship management (CRM) software, plays a critically important role for businesses that want to track and understand the customer journey from start to finish. While there are plenty of pre-packaged options available, having a custom solution designed specifically for your business ensures you don’t have to compromise in any area."
            },
            {
                title: "Time management",
                content: "From tracking employee time to setting deadlines, time management tools can boost productivity and efficiency, while simultaneously holding teams accountable for the work they produce."
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
        title: "Contact DEV.co Today",
        content: [
            "There are plenty of freelance software developers online.",
            "There are also a number of massive corporations that develop software.",
            "But there isn’t much in between. At Dev.co, we’re happy to fill the gap.",
            "We understand what small businesses want with custom software development, because we are a small business.",
            "Contact us today and we’ll be happy to chat about your software development project and provide a quote!",
        ]
    }

    const tenth = null

    return (
        <Industry first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} eighth={eighth} nineth={nineth} tenth={tenth} />
    )
}

export default Page;