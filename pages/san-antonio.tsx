import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "San Antonio"
    const first = {
        title: "San Antonio Custom Software Development Company",
        content: [
            "San Antonio has been voted as one of the best places to live across the country. It’s also a significant cultural and business hotbed. If you’re running any type of business in San Antonio, then you’re going to need a high-quality website to reach your target audience.",
            "If this is the case, then you’ve come to the right place. We have built an excellent reputation as one of the top web design agencies in San Antonio. You can rely on us to build the perfect website to complement your brand.",
            "With a special commitment to San Antonio businesses, our team is best suited to help take your digital presence to the next level.",
        ]
    }

    const second = {
        title: "Web Design in San Antonio",
        description: [""],
        content: [
            "San Antonio is not only one of the best cities to live in, but it’s also a rampant business scene. Both local and corporate businesses should definitely have a stable online presence to be able to thrive online.",
            "Most consumers use the internet to find these businesses. If your website is nowhere to be found on major search engines like Google and Bing, then there’s a great chance you will lose out on valuable business.",
            "Hiring a web design agency in San Antonio is the first step in creating an outstanding website that ranks well on major search engines and delivers qualified leads to your business on a silver platter.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "It’s now possible to build a website using a DIY website builder or a content management system (CMS). While it’s true that anyone can create a website, it’s not possible to build a fully-functional website without the proper expertise and tools.",
                "Here are the consequences of trying to build a website using these options:",
            ],
            other: [
                "DIY website builders never tell people how complicated the entire web development process is. You could be in for a huge surprise and disappointment.",
                "You could also waste a lot of time and money on a website that is completely broken.",
                "Your DIY website may not rank well on major search engines.",
                "It takes a skilled team of professionals to create a website. It’s not considered to be a DIY project.",
            ],
            additional: "As you can see, it’s in your best interest to hire a web development agency in San Antonio. This way, you can receive the peace of mind you deserve as a business owner.",

        },
        {
            title: "How We Can Help",
            content: [
                "Are you wondering how we can help your business? Our team is one of the most well-known web development agencies in San Antonio, Texas. We have spent more than a decade delivering exceptional web design services in the area.",
                "Here are some of the ways we can turn your upcoming web development project into a massive success:",
            ],
            other: [
                "We have a team of more than 250+ individuals who all have specialties in a wide variety of business industries.",
                "We have access to onshore and offshore solutions to handle large web projects with demanding staffing requirements.",
                "All of our developers have been vetted properly before working with us.",
            ],
            additional: "Our team of project managers make sure that our developers work in a timely and efficient manner."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "At Dev.co, we bring our world-class experience, tools, and resources to the table. We have serviced thousands of businesses in San Antonio over the years. Throughout this time, we have grasped advanced development techniques that work.",
            "By maintaining the highest standards of customer satisfaction and service, you can be sure you’ll receive a website you and your web visitors love.",
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