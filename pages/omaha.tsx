import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Omaha"
    const first = {
        title: "Omaha Custom Software Development Company",
        content: [
            "Omaha may be a relatively obscure city in the United States, but it’s still one of the largest cities in the country. This means that having an online presence is extremely vital to the success of your business.",
            "Where does your online presence currently stand on search engine results pages (SERPs)? If your website is nowhere to be found on major search engines like Google and Bing, then your business could be in trouble.",
            "You shouldn’t have to miss out on valuable business and forfeit potential customers to your fiercest competitors. Instead, you should purchase a website from a reputable Omaha website development agency like Dev.co.",
        ]
    }

    const second = {
        title: "Web Design in Omaha",
        description: [""],
        content: [
            "Again, Omaha may not be the most well-known city in the country. Nonetheless, having an online presence is extremely important if you want to attract new potential customers and convert them into paying customers.",
            "Local businesses run rampant in Omaha, making it very difficult to stand out if you don’t have a fully-functional website. Since most people use the internet to find local businesses, it makes sense to rank high on major search engines like Google and Bing.",
            "At Dev.co, we can help you achieve more online visibility and improve your conversion rate.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Website quality is extremely important, especially if you want to rank on major search engines like Google and Bing. Nowadays, there are so many options for obtaining a website.",
                "You could opt to use a DIY website builder and create a website on your own. In the end, the quality of your website will suffer and you will waste your hard-earned time and money on a useless website.",
                "Also, creating a website is a specialized process. It requires the expertise of someone who knows how Google ranks websites. If you don’t know of Google’s standards for how websites are supposed to be designed, it’s best to hire a Omaha web design agency to make sure the job is done correctly.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, we have more than 10 years of experience in the Omaha website development industry. Starting as a financial and advertising software consulting firm, we have developed thousands of websites over the years.",
                "No matter if you need an online store or a traditional website, we’ve got you covered. Here are all of the benefits you can look forward to when you choose to work with us:",
            ],
            other: [
                "We have a team of more than 250+ software developers. This means you are most likely to receive help from a developer that fully knows what a successful website looks like for your business.",
                "We have access to onshore and offshore teams to work on exceptionally large website development projects.",
                "All of our developers have been vetted rigorously to maintain the highest quality control.",
                "We have actionable experience in working with both nearby businesses and Fortune 500 companies.",
                "We will assign a dedicated project manager to your team to ensure that it’s completed on task.",
                "We have immense experience in delivering top-notch results.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "Maximizing Your Investment",
        content: [
            "The team at Dev.co, specializes in maintaining the highest standards of customer satisfaction and service. This means that we are never finished with your website until you’re fully satisfied.",
            "Websites are meant to convert leads into customers. When your website falls short of this goal, then it’s broken beyond repair. For this reason, you should hire a professional website development agency in Omaha to help develop the perfect website for your brand.",
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