import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Memphis"
    const first = {
        title: "Memphis Custom Software Development Company",
        content: [
            "Memphis is surely one of the most popular cities in the country. Known for its BBQ, museums, and historical attractions, there are countless tourists that visit the city throughout the year.",
            "Therefore, it’s never been more important to have an established online presence in the city of Memphis. Without a solid online presence, you will struggle to attract the attention of your target audience.",
            "The first step in establishing an online presence is creating a fully-functional website. At Dev.co, we specialize in delivering high-quality websites for all kinds of businesses. Being the #1 Memphis web design agency, you can count on us to develop the perfect website for your business.",
        ]
    }

    const second = {
        title: "Web Design in Memphis",
        description: [""],
        content: [
            "Having a premium website is no longer an option. There are numerous local businesses in Memphis. This means fighting for position can be challenging. Without a high-quality website, your business may be doomed from the start.",
            "Therefore, you should hire a Memphis website development agency to strategize the creation of a website that will deliver remarkable results for your business. This way, you can take advantage of qualified leads that are ready to purchase now.",
            "Granted, there are many web design companies in Memphis. If you don’t know where to look for the right company, then you should consider hiring us today to build your website",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Having an ordinary website just because is not a great idea. Google and other major search engines have built criteria through their complex algorithms on how websites are supposed to look.",
                "If a website doesn’t follow these guidelines, Google won’t rank them. Therefore, it’s never been more important to hire a professional web developer in Memphis to do the job for you.",
                "There are many DIY website development tools you can use to create your own website, but you are discouraged from doing so for obvious reasons. The first reason being that the quality of your website will suffer.",
                "Secondly, without the proper expertise, you may create a website full of technical issues and bugs. It’s always best to hire a website development agency in Memphis to get the job done.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, we take a lot of pride in the work we do here. With that being said, you can rely on us to create a website that will improve your online presence and help you outrank your competitors.",
                "When you choose to work with us, here are some benefits you can take advantage of:",
            ],
            other: [
                "We have a team of more than 250+ people capable of levering cross-functional capabilities. This means you are more likely to be paired with a developer that knows your industry inside and out.",
                "We have additional access to onshore and offshore teams for very large website development projects.",
                "All of our developers have been vetted rigorously to ensure that we never under-deliver.",
                "We have direct experience in working with small businesses and Fortune 500 companies.",
                "We will assign you a project manager that will coordinate your entire website development project.",
                "You can count on us to deliver exceptional results.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Formed in 2008, we have worked with thousands of companies throughout the country. Over the years, we have built a remarkable reputation as the leading website developer in Memphis.",
            "By choosing to work with us, our team will uphold the highest standards of service and customer satisfaction. What we bring to the table is our amazing attention to detail and commitment to each client we serve.",
        ]
    }

    const fifth = [
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

    const sixth = {
        title: "Contact Us Today!",
        content: [
            "We’d love for you to work with us and take your online presence to the next level. To learn more about how you can work with us, click here to speak to a member of our team.",
        ]
    }

    const seventh = {
        title: "",
        description: "",
        content: [
            {
                title: "",
                content: [
                    "",
                ]
            },

        ]
    }

    return (
        <Location first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;