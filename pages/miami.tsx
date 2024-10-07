import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Miami"
    const first = {
        title: "Miami Custom Software Development Company",
        content: [
            "Miami is one of the most well-known cities in the United States. Home to exceptionally-pleasant weather, a vibrant nightlife, and tons of local and corporate businesses, having an online presence is extremely vital if you run any kind of business in Miami.",
            "The first step in establishing an online presence is to create a fully-functional website for your brand. Thus, hiring a Miami web design company is the first step in receiving the perfect website for your brand.",
            "Are you searching for one of the best Miami web design agencies? If so, then you’ve come to the right place. Dev.co is the leading Miami web development agency, and we look forward to helping you create a strong online presence.",
        ]
    }

    const second = {
        title: "Web Design in Miami",
        description: [""],
        content: [
            "Again, Miami is one of the most popular cities in the country for both natives and tourists. Whether you are running a local business or corporate enterprise, then you should design a website that perfectly complements your brand.",
            "Ignoring this task could be a huge problem for your business. Most people use the internet to find local businesses and perform research before committing to a purchase with larger businesses.",
            "There is no excuse. If your business is nowhere to be found on major search engines like Google and Bing, then you’re going to miss out on valuable sales and revenue opportunities.",
            "Also, your competitors will feast on these opportunities and make it harder for you to do business successfully. If you need a professional Miami web design, then look further than Dev.co.",
        ],
    }

    const third = [
        {
            title: "Also, your competitors will feast on these opportunities and make it harder for you to do business successfully. If you need a professional Miami web design, then look further than Dev.co.",
            content: [
                "Website quality is extremely important. Not just any type of website will work online. Google and other major search engines use complex scientific and mathematical algorithms to rank websites.",
                "If you don’t understand how these algorithms work, then you’ll fail to realize the standards your website needs to hold up to. This means that you shouldn’t develop your own website.",
                "You shouldn’t rely on an inexperienced agency to handle your website development agency in Miami to handle the job either. Instead, you should hire a Miami web design agency to develop the perfect website for your brand.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "Founded in 2008, we started as a financial and advertising software consulting firm. Over the years, we have serviced thousands of clients in Miami and across the country. When you choose to work with us, you can expect to receive all of the following benefits:",
            ],
            other: [
                "We have a team of 250+ developers. This means that you will at least be paired with a developer that knows your business inside and out.",
                "We have an additional team of more than 500+ people that can handle exceptionally large website development projects.",
                "Our team of developers have been vetted rigorously to ensure that we provide high-quality web development services in Miami.",
                "We have actionable experience in working with both local businesses and Fortune 500 companies.",
                "We will assign a project manager to your project to ensure that it’s completely on track.",
                "We have immense experience in delivering desirable results.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "Maximizing Your Investment",
        content: [
            "The purpose of a website isn’t to look great on search engine results pages (SERPs). It’s to convert your potential customers into paying customers. When a website falls short of this goal, then it’s a failure.",
            "When you choose to work with us, we’ll develop a website that will maximize your initial investment. This means that your website will deliver the type of results that you expect to accomplish your business goals.",
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

    const seventh = null
    return (
        <Location first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;