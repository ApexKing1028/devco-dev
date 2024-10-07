import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "San Francisco"
    const first = {
        title: "San Francisco Custom Software Development Company",
        content: [
            "San Francisco is one of the most well-known cities in the world. It’s considered the business and innovation capital of the United States, home to the world-renowned Silicon Valley.",
            "If you are planning to start a new business in San Francisco or advance the online presence of an existing venture, then purchasing a high-quality website is a great first start.",
            "Having a premium website will allow you to outrank your competitors and gain online visibility in competitive markets. Therefore, if you need a great website for your business, then you’ve come to the right place.",
            "Dev.co specializes in creating top-notch websites for virtually any business in San Francisco.",
        ]
    }

    const second = {
        title: "Web Design in San Francisco",
        description: [""],
        content: [
            "It cannot be understated how important it is to have an online presence in San Francisco. Since most people use major search engines to find local businesses, it’s no longer an option to not have a website.",
            "Without a website, you risk to send your potential customers directly to your major competitors. In Silicon Valley, business is cutthroat. Needless to say, markets are highly competitive.",
            "In order to keep your business afloat, your website needs to be positioned in a place where your target audience can find it – the internet.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Google is maybe the most trusted resource in the world. To maintain this reputation, it must rank only the most valuable websites on the internet. For this reason, it won’t suffice to have just any website.",
                "For one, your web visitors are very judgmental with how your site looks. A DIY or poorly-built website won’t impress them. Also, Google will likely drop your website to its second page, where no one usually goes.",
                "By hiring a qualified web development agency in San Francisco, you’ll quickly improve the online visibility of your business where it matters most.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We take enormous pride in the work we do here in San Francisco. After servicing thousands of customers in the area, we have mastered the art of developing high-performance websites.",
                "Here are all of the benefits you can look forward to when you choose to with us:",
            ],
            other: [
                "We have more than 250+ developers on our team, all with different industry specialties.",
                "We also have access to additional teams of talent, especially when higher staffing requirements are necessary.",
                "All of our developers have been vetted to ensure that they will only deliver the best web design services.",
                "We have direct experience working with both startups and Fortune 500 companies. No matter where you are in business, we can lend a hand to your marketing strategy.",
                "We’ll assign you a project manager that will keep your web project on course.",
                "We’re experienced in creating websites that deliver results.",
            ],
            additional: "As you can see, you can rely on us anytime you need a high-quality website."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "We were founded in 2008 as an advertising and financial software consulting firm. Over the years, we have formed a solid reputation as one of the best web development agencies in San Francisco.",
            "We invest all of our time and effort into the projects we take on. The end result is usually a high-performance website that delivers the results our clients are looking for. With that said, it’s essential to choose a web design agency that will meet your needs.",
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