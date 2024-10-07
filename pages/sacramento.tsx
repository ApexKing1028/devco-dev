import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Sacramento"
    const first = {
        title: "Sacramento Custom Software Development Company",
        content: [
            "Sacramento is one of the most well-known cities in the United States. Home to business, excellent weather, beaches, and nightlife, both tourists and natives live vibrant lives in this city.",
            "If you want to capture the attention of these people, then you’ll need to establish an online presence that captivates your audience and showcases your best products and services.",
            "This is where we come in. The team at Dev.co can help you develop the perfect website for your brand. This way, your website can rank on major search engines like Google and Bing.",
            "If you’re looking for the best website design agency in Sacramento, then you’ve come to the right place. We’d love to help you take your digital presence to the next level.",
        ]
    }

    const second = {
        title: "Web Design in Sacramento",
        description: [""],
        content: [
            "Sacramento is home to both local businesses and corporate enterprises. Both companies need an online presence in order to survive and thrive in their respective markets.",
            "For local businesses, having an online presence means positioning yourself on Google Maps, the tool people use to find coffee shops, hotels, and other nearby businesses. For corporate giants, having an online presence means positioning yourself online so that potential customers can learn more about your brand before purchasing.",
            "Creating a top-notch website is the first step to establishing an online presence, and that’s where we can help.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "It doesn’t matter if you have a website or how much you spent on the project. If your website wasn’t created by a professional Sacramento web design company, then your investment is going to fail.",
                "DIY website builders trick people into believing that anyone can create a website. At Dev.co, we fully understand the complex algorithms major search engines use to rank websites.",
                "With this knowledge, we’ll model a website that matches the standards major search engines like Google and Bing value the most.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "Founded in 2008, we have more than a decade of web development experience. We have helped thousands of businesses in Sacramento and across the country create websites they are proud of.",
                "When you choose to work with us, you can expect to receive all of the following benefits:",
            ],
            other: [
                "We have a team of more than 250+ developers. This means you’ll likely be paired with a professional that knows your industry inside and out.",
                "We have access to both onshore and offshore teams of talent, exceeding more than 500+ people.",
                "All of our developers have been vetted to ensure we maintain excellent quality control.",
                "We work with both local businesses and Fortune 500 companies.",
                "We will assign a project manager to your project to make sure that it’s completed on your timeframe.",
                "We have experience in delivering results to all of our clients.",
            ],
            additional: "We have a special commitment to our clients to maintain the highest standards of service and customer satisfaction. When you hire our Sacramento website design agency, you can expect quality service that won’t end until you’re fully satisfied with your final product."
        },
    ]

    const forth = {
        title: "Maximizing Your Investment",
        content: [
            "There is much more to a website than it’s appearance. While people are extremely judgemental about the design of your website, the design doesn’t matter if your website isn’t built to convert.",
            "When you work with us, we’ll create a website that fully maximizes your initial investment. With a stronger online presence, you can attract more qualified leads that are ready to buy. Thus, you can increase your potential sales and revenue."
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