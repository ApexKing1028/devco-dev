import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Philadelphia"
    const first = {
        title: "Philadelphia Custom Software Development Company",
        content: [
            "Philadelphia, the city of Brotherly Love, is one of the most culturally significant cities in the United States. If you’re here, then that means you need to establish a web presence for your company.",
            "If so, then you’ve come to the right place. Dev.co specializes in delivering top-quality websites for local and corporate businesses in Philadelphia. Not only do we design impeccable websites, but we ensure that they are made to perfection.",
            "You can count on our team to deliver a spectacular website that will attract qualified leads and convert them for a boost in sales and revenue. Look no further than Dev.co for a reputable web development agency in Philadelphia.",
        ]
    }

    const second = {
        title: "Web Design in Philadelphia",
        description: [""],
        content: [
            "The city of Philadelphia holds a special value to the United States. A cultural hotbed and country-wide landmark, Philadelphia is home to hundreds of trendy restaurants and local businesses",
            "It’s also the site of corporate headquarters for Comcast, Aramark, and CIGNA. Philadelphia is also an academia city, boasting convenient commutes to Temple University, Drexel University, and the University of Pennsylvania.",
            "If you run any type of business in this city, having an established digital presence is essential. With an exceptional website from our Philadelphia web design agency, you can thrive in your industry and surpass your competitors.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Fortunately, the state of the internet has made it possible to turn any professional task into a DIY project. This has both its advantages and disadvantages. One notable disadvantage is that people are fooled into believing they can simply create their own fully-functional website.",
                "While anyone can create a website, not everyone can build the perfect website for their brand. Here are some of the consequences of attempting to create your own website:",
                "You could waste a lot of time and money on a website that won’t benefit your business.",
                "It takes amazing web design knowledge to build a website. Any amatuer won’t succeed in building a fully-functional website.",
                "By creating your own website, the quality will certainly suffer.",
                "The website you create may not rank well on major search engines like Google and Bing.",
                "As you can see, anyone can’t create a great website. You can rely on our expertise to help you create a site your web visitors will enjoy.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "At Dev.co, we take immense pride in the work we do here. With a high commitment to service and customer satisfaction, we’ll provide the following benefits to Philadelphia businesses:",
            ],
            other: [
                "You can take advantage of our team of more than 250 software developers with experience in virtually every business industry.",
                "We have the resources to scale our development operations for projects with large staff requirements.",
                "All of our software developers are properly vetted before they work on any project.",
                "We work with both small businesses and Fortune 500 companies.",
                "Our project managers coordinate our tasks to ensure everything is completed on time and on budget.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Established in 2008, Dev.co has built a solid reputation as one of the top web development agencies in Philadelphia. We have more than a decade of experience navigating thousands of web development projects.",
            "When you choose to work with us, we’ll make sure that you receive a website both you and your web visitors will be satisfied with.",
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