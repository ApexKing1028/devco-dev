import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Baltimore"
    const first = {
        title: "Baltimore Custom Software Development Company",
        content: [
            "Major search engines like Google and Bing have a duty to pair search queries with the most accurate results. To give internet users what they want, these companies use complex mathematical and scientific ranking algorithms.",
            "With that said, it takes much more than a beautiful website to catch the attention of major search engines. Instead, fully-functional websites are valued by major search engines.",
            "By hiring a Baltimore website development agency, you can succeed in placing your website directly in front of your target audience. Are you searching for a reputable web design company in Baltimore to develop your website?",
            "If so, then you’ve come to the right place. Dev.co is the perfect place to acquire an exceptional website for your brand.",
        ]
    }

    const second = {
        title: "Web Design in Baltimore",
        description: [""],
        content: [
            "Baltimore is the capital of Maryland, and one of the most well-known cities in the country. There are a suite of different local businesses and corporate headquarters in the city.",
            "If you are operating any local or corporate business in the area, then you need to establish an online presence. The first step in doing so is creating a fully-functional website for your brand.",
            "Dev.co has built a strong reputation as one of the best website design companies in Baltimore.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Anyone just can’t create a website. It takes a professional expertise to fully understand how major search engines rank websites and the quality factors they look for and value. Without this knowledge, creating your own website can be difficult.",
                "While it’s possible, you may waste your hard-earned time and money on a website that won’t deliver meaningful leads and conversions to your company. Therefore, hiring a skilled Baltimore web design company is definitely in your best interest.",
                "This way, you can get a great return from the amount of money you ultimately spend on building your website.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We take immense pride in the websites we create here at Dev.co. No matter what type of website you’re looking for, you can rely on us to deliver remarkable Baltimore website development services for your brand.",
                "Here are the benefits you can expect when you choose to work with us:",
            ],
            other: [
                "We have a team of more than 250+ developers, promising you that you’ll receive help from a developer that fully knows what it takes to rank a website in your industry.",
                "We have both onshore and offshore teams of more than 500 people for website development projects that need large staffing requirements.",
                "All of our developers have been properly vetted to maintain quality control here at Dev.co.",
                "We have tremendous experience in working with small and large businesses, nearby shops and Fortune 500 companies.",
                "You will be assigned a project manager that will spearhead your entire website development project.",
                "We have exceptional experience in delivering top-notch results for our clients",
            ],
            additional: "There are many benefits you can take advantage of when you choose to work with us. Hire us today to receive a website that complements your brand."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Established in 2008, we have more than 12 years of experience in the web design industry. With our strong attention to detail and remarkable customer satisfaction, we can help take your web presence to the next level.",
            "Over the years, our agency has received critical acclaim not just for the services we provide, but also due to our own growth. We believe that we truly have something to offer your company: first-hand experience in how to grow your business",
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