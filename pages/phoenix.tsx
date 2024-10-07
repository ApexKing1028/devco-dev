import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Portland"
    const first = {
        title: "Portland Custom Software Development Company",
        content: [
            "Phoenix is not only one of the best places to live, but it’s also a surprising center for business and commerce. If you’re here, then that means that you’re running a local business in Phoenix.",
            "Do you need help with establishing an online presence in a tough and competitive market? If so, then you’ve come to the right place. Dev.co is one of the best web design agencies in Phoenix.",
            "We specialize in creating top-notch websites for local businesses, regardless of their niche. You can count on our team to deliver an outstanding product to help take your online presence to the next level.",
        ]
    }

    const second = {
        title: "Web Designer in Phoenix",
        description: [""],
        content: [
            "Most people use the internet to find local businesses. This means it’s absolutely important for your business to show up on major search engines like Google and Bing. Otherwise, you’re going to miss out on valuable business.",
            "In addition, your competitors may actually outrank you. Do you think that your target audience will scroll to the second page of Google to find your website? Hiring a web designer in Phoenix will allow you to take the first step in building your online presence.",
            "Ranking first on Google and Bing starts with a premium website. We ca",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Website quality is extremely important. A potential customer almost always considers the design and quality of a website before deciding to move forward. Granted, you can definitely build your own website.",
                "There are actually many DIY website builders that are available online. However, there are some glaring disadvantages to building your own website, which include:",
                "Building a website requires a special expertise. Creating your own website will result in significant technical issues that can negatively affect the performance of your website.",
                "You’ll certainly end up spending more money on website repairs and maintenance if you aren’t satisfied with your website.",
                "An amatuer website rarely ranks well online. Web developers specialize in creating websites that align with Google’s algorithmic standards.",
                "As you can see, building a website is no small task. By hiring a Phoenix web design agency is key in establishing your online presence and advancing your marketing strategy.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "Are you wondering how our Phoenix web development company can help you? We take immense pride in the work we do here.",
                "With that said, here is the complete steps of our web design process:",
            ],
            other: [
                "Our goal in this phase isn’t just to design a beautiful website. It’s also to leverage the highest standards of user experience. We’ll start by aligning with your goals and vision to create a website your web visitors will love.",
                "Our mission is to build your website from the ground up. From QA testing to design mock-ups, our team will make sure that the development process transitions smoothly.",
                "Our development and support team will help you navigate this process, teach you how to use your new website, and help search engine bots crawl your website.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "With more than 10 years of web development experience, our team has the tools and resources to spearhead your upcoming web project. What we bring to the table is our experience and knowledge of what it takes to build a successful website in Phoenix.",
            "We’re not just any Phoenix web design company. We have built a strong reputation as one of the top web designers in Phoenix, Arizona.",
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