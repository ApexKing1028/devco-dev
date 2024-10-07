import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Raleigh"
    const first = {
        title: "Raleigh Custom Software Development Company",
        content: [
            "Raleigh, North Carolina is known for its rich, tight-knit culture and architecture. An eclectic mixture of different heritages all blossom in Raleigh, cultivating a unique sphere of local businesses in the city.",
            "If you are running any type of business in Raleigh, then you need to establish a strong online presence. If not, then you’ll miss out on valuable sales and revenue opportunities online.",
            "You’ll also forfeit qualified leads to your fiercest competitors. Creating a fully-functional website is the first step of establishing a strong online presence. Luckily, the team at Dev.co can help you design a beautiful website for your brand that will achieve the type of results you’re looking for.",
        ]
    }

    const second = {
        title: "Web Design in Raleigh",
        description: [""],
        content: [
            "Most people use the internet to find a local business. After all, it’s never been easier to use a laptop or smartphone to pull up continual listings of nearby businesses. Most people also use the internet to perform research before committing to a purchase.",
            "This means anyone that wants to buy a weighted blanket will research it first before making a purchase. As you can see, it’s never been more important to have a website that ranks well on major search engines like Google and Bing.",
            "It’s also important to have a website that brilliantly showcases your products and services. The team at Dev.co can create a website that accomplishes all of your marketing objectives.",
        ],
    }

    const third = [
        {
            title: "This means you can expect your website to attract leads that are interested in your products or services and convert them. Your website will provide insight into your offerings and captivate visitors to purchase or visit your business.",
            content: [
                "Website quality is a major issue on the internet today. This is because many people believe that they can simply create their own website using a DIY website builder. This is actually misleading.",
                "Not anyone can build their own website. By doing so, the quality of your website will suffer tremendously. Also, your website will be full of technical issues that can hinder its performance.",
                "Lastly, your broken website won’t rank well on major search engines. By hiring a Raleigh website development agency, you can put this important task in the hands of professionals.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "With more than a decade of experience, we have developed countless websites in Raleigh. What’s more is that we work with any type of business, no matter what type of website you need to survive and thrive in your industry.",
                "When you choose to work with us, here are some of the benefits you can look forward to:",
            ],
            other: [
                "Our team of more than 250+ developers can assist your website development project, even if you operate in a specific and unknown niche.",
                "We have access to both onshore and offshore development teams of more than 500+ people. No matter the size of your website development project, we’ve got you covered.",
                "All of our developers have been vetted to ensure that we provide quality web design services in Raleigh.",
                "We specialize in working with both local businesses and Fortune 500 companies.",
                "We specialize in working with both local businesses and Fortune 500 companies.",
                "We have immense experience in delivering top-notch results for our clients.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "Maximizing Your Investment",
        content: [
            "A website should do much more than look great. It should convert qualified leads into paying customers. If your website cannot do this, then it’s a failure. We build websites that maximize your initial investment.",
            "This means you can expect your website to attract leads that are interested in your products or services and convert them. Your website will provide insight into your offerings and captivate visitors to purchase or visit your business.",
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