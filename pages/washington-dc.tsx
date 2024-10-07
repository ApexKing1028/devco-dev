import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Washington D.C."
    const first = {
        title: "Washington D.C. Custom Software Development Company",
        content: [
            "Washington D.C. is clearly known as the capital of the United States, and an epicenter for the country’s historical monuments, as well numerous local and corporate business headquarters.",
            "It’s important for all of these businesses to have an active online presence. Otherwise, you can risk sending all of your potential customers directly to your competitors. The first step in building an online presence is creating the perfect website for your brand.",
            "Thus, hiring a qualified website developer in Washington D.C. is vital to your success as a business owner. If you have come here wanting to learn more about how you can find one, then you’re in the right place.",
            "Dev.co has built a massive reputation as one of the most prominent developers in the country.",
        ]
    }

    const second = {
        title: "Web Design in Washington D.C.",
        description: [""],
        content: [
            "Most consumers use the internet to locate a nearby business of some sort. After all, it’s very convenient to use a smartphone, laptop, or tablet to conduct an online search. Thus, phone books and online directories are now out of style.",
            "If your website can’t be found where it matters most, which is on major search engines like Google and Bing, then you’re naturally going to struggle to improve the profitability of your business.",
            "Almost all successful brands have a stable online presence and dynamic website. With that said, how does your website stack up against its competitors?",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Not every website is going to perform well on Google. There are trillions of websites on the web, and it’s no coincidence that Google’s first page only contains a small drop of these sites.",
                "Google’s mission is to protect its reputation as the most prominent search engine. Therefore, it’ll only rank websites that will align with their standards. This means that you can’t create a website on your own if you are familiar with these standards, nor can you rely on an inexperienced website design company in Washington D.C.",
                "Your best option is to hire a website developer that will complete a stellar website on your behalf.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, we specialize in delivering remarkable website development services. We have worked with thousands of businesses in Washington D.C. With confidence, we can guarantee that you will enjoy all of these benefits when you choose to work with us:",
            ],
            other: [
                "Our team of more than 250+ software developers are second to none. You’re bound to be paired with a developer that knows your industry.",
                "We have access to additional developers of more than 500+ to handle any website development project.",
                "All of our developers are highly-skilled, being vetted thoroughly before working with us.",
                "We have actionable and direct experience in working primarily with both small businesses and Fortune 500 companies.",
                "You will be assigned a dedicated project manager that will make sure your project is right on course.",
                "We have direct experience in delivering exceptional results through your website.",
            ],
            additional: "As you can see, there are so many reasons why you should hire us for your project. Contact us today to learn more about how we can help."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "With more than 12 years of web development experience, you can count on us to build a website that will complement your brand.",
            "We not only have the tools and resources at our disposal to get the job done, but we also maintain the highest standards of service.",
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