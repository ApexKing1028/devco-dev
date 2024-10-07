import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Tucson"
    const first = {
        title: "Tucson Custom Software Development Company",
        content: [
            "Tucson is one of the most well-known cities in the state of Arizona. If you are running any type of business in Tucson, then it’s important that you establish an online presence to attract qualified leads to your business.",
            "The very first step in establishing a strong online presence is creating a website, and that is where we can help. Dev.co specializes in creating high-performance websites to help businesses improve their digital presence.",
            "Do you need to develop a top-tier website for your business? If so, then you’ve come to the right place. We can help you take your online presence to the next level.",
        ]
    }

    const second = {
        title: "Web Design in Tucson",
        description: [""],
        content: [
            "Having a fully-functional website is no longer an option. It’s a necessity for any business: local and corporate. Since most consumers use the internet to find local businesses, you’ll need to create an online storefront that will be positioned in front of your target audience.",
            "Starting a website is a great place to start. Local businesses tend to thrive in Tucson. This means that positioning is everything. In order to surpass your competitors online, you’ll need a website that will sparkle and catch the attention of potential customers.",
            "Our team will deliver Tucson website development services to create a website that will complement your brand.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Website quality is extremely important. Google and other major search engines implement algorithms based on machine learning and artificial intelligence (AI) that will only rank top-quality websites.",
                "If your website doesn’t meet the standards of these algorithms, then you’ll only be wasting your hard-earned time, money, and effort. This means that you should avoid creating your own website.",
                "Building a perfect website means understanding the technicalities behind these algorithms. For this reason, you should hire a Tucson web design agency that can create and rank your website.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, we have built a strong reputation as the top website development company in Tucson. Over the years, we have serviced thousands of companies in Tucson and across the world.",
                "When you choose to work with us, here are all of the benefits you can expect to receive",
            ],
            other: [
                "We have a team of more than 250+ developers. This means you can count on us to assign a developer to your project that fully understands your business.",
                "We have access to both onshore and offshore teams with more than 500+ developers and team members.",
                "All of our developers have been vetted to maintain the highest standards of quality control.",
                "We have direct experience in working with both local businesses and Fortune 500 clients.",
                "We will assign a project manager to your project to coordinate the completion of your website development project.",
                "We have immense experience in delivering exceptional results with our Tucson web design services.",
            ],
            additional: "As you can see, there are so many reasons why you should hire us as your website design agency in Tucson. We’d love to help create the perfect website for your brand."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Founded in 2008, we have built a reputation for providing outstanding website development services. More than a decade ago, our agency started as a financial and advertising consulting firm.",
            "Over the years, we have built our agency into a powerhouse in the marketing industry. We believe that the agency you trust should be a company that knows what it takes to grow.",
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