import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Mesa"
    const first = {
        title: "Mesa Custom Software Development Company",
        content: [
            "While Mesa, Arizona may be unfamiliar to many Americans, it’s still a remarkable city. Mesa highlights the suburban feel of urban Arizona and is one of the most beautiful and affordable places to live in the entire state.",
            "Mesa also is one of the safest cities in the country, home to a thriving collection of local businesses. The city is increasingly welcoming new visitors and citizens, which means that it’s all the more important for local businesses to stand out in their industries.",
            "If you operate in a competitive industry, then you’ll need to create a website that shows up on major search engines like Google and Bing. Fortunately, the team at Dev.co can provide web design services in Mesa to take your online presence to the next level.",
        ]
    }

    const second = {
        title: "Web Design in Mesa",
        description: [""],
        content: [
            "People don’t search for local businesses the way they used to. No one uses phone books and business directories anymore. Instead, they’re going to use a search engine to find nearby businesses.",
            "If your business isn’t found anywhere on major search engines like Google and Bing, then you’re going to miss out on valuable business. What’s worse is that your potential customers will work with businesses that are currently outranking you.",
            "The first step to improving your online presence is creating a fully-functional website, and that’s where we come in.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Website quality is a serious issue. Nowadays, there are DIY website builders available that claim anyone can create their own website. This simply isn’t true. To build a website that ranks well on major search engines, you’ll first need to understand how search engine algorithms work.",
                "Without this knowledge, the only thing you’ll build is a website that sits on the second and third pages of Google. That’s only if your website will be ranked at all. Hiring a Mesa website development agency is the only option you have in profiting from your online presence.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "If you’re looking for high-quality web design services in Mesa, then you’ve come to the right place. At Dev.co, we have built a strong reputation for being the leading website provider in Mesa.",
                "When you choose to work with us, here are all of the benefits you can expect to receive:",
            ],
            other: [
                "Our team consists of more than 250+ developers. This means that your developer will likely know your business inside and out.",
                "We have access to both onshore and offshore teams of staff for extraordinarily large website development projects.",
                "All of our developers have been vetted to make sure that they will only provide quality web design services in Mesa.",
                "We have actionable experience in working with both Fortune 500 companies and local business clients.",
                "We will assign a dedicated project manager to your team to ensure that it’s completed on time and on budget.",
                "We have experience in delivering exceptional results for your website project.",
            ],
            additional: "Thousands of businesses have relied on us to develop their website. As you can see, there are several reasons why you should do the same."
        },
    ]

    const forth = {
        title: "Maximizing Your Investment",
        content: [
            "At Dev.co, we don’t just create beautiful websites. We specialize in developing a website that will fully complement your brand. When you hire us, you can expect to receive a higher return on your investment.",
            "Our goal is for your website to outrank your competitors and drive sales and revenue to your company.",
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