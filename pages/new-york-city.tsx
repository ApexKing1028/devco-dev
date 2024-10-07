import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "New York City"
    const first = {
        title: "New York City Custom Software Development Company",
        content: [
            "Having a website is no longer an option nowadays, neither is possessing an ordinary site that was built on your own. An established web presence is key to attracting online leads and boosting the conversions of your business.",
            "Working with a reputable web design agency in New York City will allow you to create a suitable website for your brand. This way, you can establish a virtual storefront for your business and boost sales and revenue.",
            "If you are searching for New York web development services, then you’ve come to the right place. Dev.co specializes in creating custom websites for New York businesses.",
        ]
    }

    const second = {
        title: "Web Developer in New York",
        description: [""],
        content: [
            "New York City is the most populated city in the United States, the most well-known city in the world, and an iconic cultural metropolis. The City that Never Sleeps is home to millions of corporate and local businesses.",
            "In fact, commerce is a trademark of the city. There are likely several competitors in your industry that are fighting for the same business as you. If you don’t have an established web presence, you could struggle to gain a competitive edge in your industry.",
            "Building an exceptional website is one of the most effective ways your target audience can find your business.",
        ],
    }

    const third = [
        {
            title: "The Importance of Quality Web Design",
            content: [
                "Most people opt to create their own website using a DIY website builder or content management system (CMS). While this may be an affordable option, it’s not always the best one.",
                "Here are the disadvantages of building a website on your own:",
                "The quality suffers. Web developers are trained to build excellent websites; amateurs can rarely do the same quality work.",
                "If you’re not familiar with building websites, you could encounter a lot of different technical issues, such as broken links, page errors, etc.",
                "Websites must be built to rank on major search engines, like Google and Bing. A website you create may not be suitable to do this.",
                "As you can see, having a quality website means everything, especially in New York City. We can help you create an outstanding website that attracts potential customers to your business.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "Dev.co has built a strong reputation as one of the best web development agencies in New York. We pride ourselves on maintaining the highest standards of customer satisfaction and service.",
                "Here is how we can help you build the perfect website for your business:",
            ],
            other: [
                "Our design is leveraged through impeccable user experience (UX). As a partner to your company, we will strive to understand your goal and vision through strategic planning.",
                "The development process is a long and enduring process. Allow us to spearhead the development process for your business through ground-up software development.",
                "Once your website is ready, we’ll lead you through the quality control process to ensure you are completely satisfied with the final product. Also, we’ll check for bugs and technical issues before your website goes live",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "With more than a decade of web development experience, we possess all the tools and resources to get the job done. Our development and support team will work tirelessly on your behalf to ensure that your website is always able to rank on major search engines.",
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