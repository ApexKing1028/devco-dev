import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Milwaukee"
    const first = {
        title: "Milwaukee Custom Software Development Company",
        content: [
            "Milwaukee, home to a rich tradition of sports and craft beer, is a highly recognizable city in the United States. Local businesses are rampant in Milwaukee, making it all the more important to establish a strong online presence.",
            "Therefore, if you’ve come here to inquire about our remarkable website development services in Milwaukee, then you’ve come to the right place. Dev.co has built an excellent reputation as the leading web design agency in Milwaukee.",
            "When you partner with us, you can expect to take your digital presence to a new level and outrank your fiercest competitors. We look forward to working with you and growing your business today.",
        ]
    }

    const second = {
        title: "Web Design in Milwaukee",
        description: [""],
        content: [
            "There are thousands of local businesses in Milwaukee. All of these businesses are currently fighting for online positioning to attract qualified leads and convert them into paying customers.",
            "Where is your website ranked amongst this massive competition? If your website is nowhere to be found on major search engines like Google and Bing, then you’re going to miss out on valuable business.",
            "As such, you should contact a reputable Milwaukee website design agency to help you create the perfect website for your brand. This way, you can position your business above the rest of the competition.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Don’t make the mistake of building a website on your own. While there are so many different DIY website builders available today, it’s not possible to build a successful website without any knowledge for how search engines work.",
                "For example, Google and Bing use complex algorithms to rank websites based on the standards they collectively set. If your website doesn’t follow these standards, then these search engines won’t rank it.",
                "It also isn’t as simple as researching how to create a successful website. You should instead rely on a website development agency in Milwaukee to get the job done.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We have made it our mission to deliver high-quality websites to both local and corporate businesses in Milwaukee. Over the years, we have built a remarkable reputation as one of the top web design agencies in Milwaukee.",
                "When you choose to work with us, here are benefits you can expect to receive:",
            ],
            other: [
                "We have a team of more than 250+ developers. When you select our agency to work with, you’ll be paired with a skilled developer that knows your business inside and out.",
                "We have access to additional team members up to 500+ for extraordinarily large website development projects.",
                "Our team of developers have been rigorously vetted to ensure that we maintain the highest quality control.",
                "We have in-depth experience in working with both small businesses and Fortune 500 companies.",
                "We will assign you a project manager to ensure that your project is completed on course.",
                "You can count on us to deliver outstanding results with your website.",
            ],
            additional: "As you can see, there are a lot of different reasons why you should hire our agency. Partner with us today to create a website that complements your brand."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Our team has more than a decade of web development experience in Milwaukee. Over the years, we have serviced thousands of clients across varying industries. Our clients regularly count on us to deliver top-notch websites.",
            "As the leading website development agency in Milwaukee, you can also count on us to uphold the highest qualities of customer satisfaction. Until you are fully satisfied, we will continue working on your behalf.",
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