import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Kansas"
    const first = {
        title: "Kansas City Custom Software Development Company",
        content: [
            "Kansas City is known for its rich culture in sports, cuisine, and architecture. Also, many local businesses operate in this city, creating a unified competition that requires every nearby business to have an online presence.",
            "The first step to establishing an online presence is creating a fully-functional website for your brand. Not just any website will do, either. Having a website that brilliantly showcases your products and services is key.",
            "At Dev.co, we specialize in delivering quality software development services in Kansas City. Whether you need a traditional website or an online store, our team of software developers at Dev.co has you covered.",
        ]
    }

    const second = {
        title: "Web Design in Kansas City",
        description: [""],
        content: [
            "There is no getting around the fact that you need to develop the right website for your business. Most consumers use the internet to find local businesses. After all, it’s so simple to use a laptop or smartphone to locate a nearby business.",
            "Let’s face it – no one uses phone books and business directories anymore. Instead, potential cus",
            "When you develop a website, it’s important to work with a Kansas City website developer like Dev.co to ensure that the job is done properly.",
            "As one of the top software development companies, they offer custom software solutions and project management tailored to your business strategy. With their technical expertise and experience as a leading Kansas City software developer, they also provide digital marketing, mobile app development, and other essential services.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Again, not just any website will work. Google and other major engines have an obligation to rank the best websites on their search engine results pages (SERPs). This helps Google mainly to become the world’s best search engine.",
                "Google uses advanced scientific and mathematical algorithms to rank websites, based on a wide variety of different factors. If your website doesn’t align with the standards Google has set for websites, then it’s going to be pushed to the second, third, or last page of Google.",
                "That’s only if Google does rank your website at all. For this reason, you should hire a professional website design agency in Kansas City to take on your development project.",
                "A top digital marketing company can ensure your site meets these standards, addressing complex business challenges and facilitating digital transformation. By partnering with Kansas City software developers, you can benefit from the expertise of the best software companies in the region.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, we take pride in the work we do here. For more than a decade, we have built the best websites for all kinds of businesses in the area. We have a special commitment to upholding the highest standards of customer satisfaction and service.",
                "Here is what you can look forward to when you decide to work with us:",
            ],
            other: [
                "We have a team of more than 250+ developers on staff. This means you are more than likely to work with a developer that knows your business inside and out.",
                "We have access to both onshore and offshore teams to accommodate exceptionally large website development projects.",
                "All of our developers are vetted rigorously to ensure that we deliver the best Kansas City web design services.",
                "We have actionable experience in working with nearby businesses like coffee shops, Fortune 500 companies, start-ups, and corporate enterprises.",
                "We will assign you a dedicated project manager that will make sure that your website development project runs smoothly and is completed on schedule.",
                "We have massive experience in producing excellent results.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "Maximizing Your Investment",
        content: [
            "website is supposed to triple your initial investment. To put it simply, your website should become a factory for attracting qualified leads that are interested and ready to buy and converting them into paying customers.",
            "A website that falls short of this goal is a failure. By hiring our Kansas City website development company, you can receive a fully-functional website that maximizes its initial investment.",
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