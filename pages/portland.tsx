import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Portland"
    const first = {
        title: "Portland Custom Software Development Company",
        content: [
            "Portland, Oregon is one of the most well-known cities in the United States. Home to both local and corporate headquarters, it’s never been more important to have a stable online presence in this city.",
            "With that said, do you have a fully-functional website for your business? If not, then you’ve definitely come to the right place. At Dev.co, we have built a strong reputation as one of the best website development agencies in Portland.",
            "You can count on our team to develop a remarkable website that will properly showcase your products and services. Dev.co has developed a mastery of creating exceptional websites for both local businesses and corporate enterprises.",
        ]
    }

    const second = {
        title: "Web Design in Portland",
        description: [""],
        content: [
            "Most people use the internet to find local businesses. For corporate giants, most consumers use the internet before making a purchasing decision. Essentially, it’s simple to pull out a smartphone and search for any “near me” businesses.",
            "It’s also convenient to perform basic and extensive research before committing to purchase a product or service. People don’t search for businesses the way they used to.",
            "If your business isn’t found online, it’s frankly going to suffer. You’ll even find difficulty surpassing your competitors, which can be disastrous if you’re in a competitive industry. For this reason, you should hire a Portland website developer to build an impeccable site for your brand.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "There are trillions of websites on the internet. To rank them all, major search engines like Google and Bing initiate complex search algorithms based on machine learning and artificial intelligence (A",
                "This means that not just any website will rank on these major search engines. Therefore, you can never rely on using a DIY website builder to create your site. It’ll never work unless you have a firm understanding on what core search algorithms consist of.",
                "It’s misleading to assume that anyone can create a website. Granted, you can design a website, but that doesn’t guarantee it will rank well on major search engines to deliver results to your business.",
                "As a result, you should hire a Portland website design agency to handle your upcoming website design campaign.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We have built a strong reputation of being one of the top website development agencies in Portland. This is due, in large part, to the massive amount of benefits we provide to our clients.",
                "Here are all of the benefits you can expect when you choose to work with us:",
            ],
            other: [
                "We have a team of more than 250+ developers. This ensures that your developer will have insider knowledge on what it takes to develop the perfect website for your industry.",
                "We have access to additional onshore and offshore teams to assist a hand in large website development projects.",
                "All of our developers have been properly vetted to make sure we deliver top-notch web design services in Portland.",
                "We work primarily with both Fortune 500 companies and even small businesses.",
                "We have a strong commitment to delivering results in all of our projects.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Don’t make the mistake of settling for just any website design agency in Portland. Instead, put your trust in an agency that has deep expertise in web development and customer satisfaction.",
            "For more than 12 years, we have serviced the businesses of Portland. Until you are fully satisfied with your website, we will continually work on your behalf to create a website you and your customers will be proud of.",
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