import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Las Vegas"
    const first = {
        title: "Las Vegas Custom Software Development Company",
        content: [
            "Las Vegas is not only one of the most well-known cities in the United States, but it’s also one of the most recognizable cities in the world. If you’re running any type of business in Las Vegas, then it’s important to establish an online presence.",
            "Why? Most consumers use the internet to find local companies in Las Vegas. They also use the internet to perform research before making a purchasing decision. If your business is nowhere to be found on the internet, then your target audience will naturally have difficulty finding you and learning more about your products and services.",
            "They’re also more likely to side with your competitors that have an online presence. As such, you should hire a Las Vegas website developer to create a stellar website and software solutions on your behalf.",
        ]
    }

    const second = {
        title: "Web Design in Las Vegas",
        description: [""],
        content: [
            "Since there are trillions of websites all over the internet, major search engines like Google and Bing use complex mathematical and scientific algorithms to rank them appropriately.",
            "f you don’t have a website or a low-quality one, then it may take some catching up to do before you can surpass your competitors. Luckily, you can rely on our Las Vegas web design company to create the perfect website that will complement your brand.",
            "In addition to website creation, our consulting services are tailored to meet the needs of enterprise clients across various industries, ensuring a seamless digital transformation. We leverage innovative technologies to design websites that not only reflect your brand but also drive growth and success.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "As you can see, not every website will rank well online. Because of Google stringent algorithms and standards, a sloppy website won’t even make it to its first page, where most people congregate.",
                "Now, there are several DIY website builders that promise anyone can create their own website. This is misleading, considering that anyone can indeed create a website. However, not anyone can create a website that will rank well on major search engines.",
                "If you decide to use a DIY website builder, then you’ll only waste your hard-earned time and money on a website that’s useless. Instead, hire a website developer in Las Vegas to develop a top-notch website for your company.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We take huge pride in the work we do here at Dev.co. For this reason, thousands of businesses trust us to provide exceptional custom software development services in Las Vegas. Here are all of the benefits you can expect to receive when you decide to work with us:",
            ],
            other: [
                "We have a team of more than 250+ website and software developers to handle any website development project possible.",
                "We have access to more than 500+ additional staff with expansive expertise that can be called upon in exceptionally large website projects.",
                "All of our developers have been vetted rigorously to ensure they will only provide exemplary web design services in Las Vegas.",
                "We have direct expertise in working with both nearby businesses and corporate enterprises.",
                "We will assign you a project manager that is committed to your project and will make sure that it’s completed promptly.",
                "You can count on us to deliver top-notch results.",
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Established in 2008, we began as an advertising and financial consulting firm. As one of the best software development companies, we have worked with thousands of businesses in Las Vegas. We also have several locations across the country, building a reputation as a leading website provider in the United States.",
            "Our promise is to uphold the highest standards of customer satisfaction and service. This means that you can rely on us to work tirelessly on your behalf until you are fully satisfied with the final product.",
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