import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Boston"
    const first = {
        title: "Boston Custom Software Development Company",
        content: [
            "Boston is one of the most well-known cities in the United States. The city has an important historical culture as the impetus of the American Revolution. It’s also known to several acclaimed universities, local businesses, and corporate headquarters.",
            "Needless to say, having an online presence is extremely important nowadays. Nowadays, most people use search engines to find businesses and make purchasing decisions.",
            "If your business is nowhere to be found on these search engines, then you’re going to have extreme difficulty attracting qualified leads. Also, your audience may be more compelled to do business with your fiercest competitors instead.",
            "For this reason, you should hire the best website development company in Boston. At Dev.co, Our software engineer can help take your digital presence to the next level.",
        ]
    }

    const second = {
        title: "Software & Web Development in Boston",
        description: [""],
        content: [
            "Boston has one of the most competitive markets in the country. Since people don’t use directories and phone books to locate a business, they’re going to turn to a more convenient option: the search engine.",
            "Major search engines like Google and Bing make it easy for people to find the business they’re looking for. Visibility on these search engines is vitally important. The first step in building your online presence is creating a website that represents your brand.",
            "Hire a Boston website developer today to improve your online presence and attract more qualified leads back to your website.",
        ],
    }

    const third = [
        {
            title: "The Importance of Software or Website Quality",
            content: [
                "Having any website design isn’t going to suffice if you’re trying to build a sustainable online presence. Imagine how solidified your competitors already are with their online presence.",
                "Do you truly believe that your website will surpass theirs with a mediocre website? Of course not. You’ll need to hire a reputable Boston website agency to achieve any results with your website.",
                "Don’t rely on using a DIY website builder. Not just anyone is capable of building a website that will rank well on major search engines like Google and Bing. You should trust a professional to do the job for you so that your website’s quality doesn’t suffer and it truly delivers remarkable results for your business.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We take immense pride in the work we do here at Dev.co. When you choose to work with us, you can easily take advantage of the following benefits we can bring to your company.",
                "These benefits include:",
            ],
            other: [
                "We have a team of more than 250+ developers to handle all kinds of web development projects.",
                "We have access to large, scalable teams that can assist in every aspect of your web development project.",
                "All of our developers have been vetted rigorously to ensure they are capable of delivering high-quality web design services in Boston.",
                "We work primarily with both local businesses in Boston, as well as corporate enterprises.",
                "You will be assigned a dedicated project manager to coordinate the completion and performance of your website development project.",
                "Our team is committed to not only building a quality website, but developing one that acquires results on your behalf.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Founded in 2008, we have more than 12 years of web development experience in Boston. We have a strong commitment to maintaining the highest standards of service and customer satisfaction.",
            "This means that we will work tirelessly on your behalf to create an outstanding website until you are fully satisfied. Don’t settle for hiring a standard Boston web design agency. Choose one that will have your best interest in mind.",
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