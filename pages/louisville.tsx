import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Louisville"
    const first = {
        title: "Louisville Custom Software Development Company",
        content: [
            "Louisville is one of the most popular and well-known cities in the United States. If you’re running a business of any kind, then it’s important to establish an online presence first. Without doing so, your business can struggle to attract meaningful leads and convert them into sales opportunities.",
            "Creating a fully-functional website helps in ranking well on major search engines, such as Google and Bing. Therefore, it’s in your best interest to hire a professional Louisville website development agency.",
            "Doing so will help you to outrank your fiercest competitors and attract attention from your target audience who are very interested in purchasing your products or services. Dev.co specializes in creating websites that deliver impeccable results for our clients.",
        ]
    }

    const second = {
        title: "Web Design in Louisville",
        description: [""],
        content: [
            "Most people use search engines to find a local business. After all, it’s very convenient to do so. You can simply use your smartphone to find a business “near me”. From there, Google Maps will populate an exhaustive list of nearby businesses.",
            "Similarly, most consumers use the interest to perform research before committing to a purchase. As you can see, having a website that shows up for these searches is crucial to the success of your business.",
            "Luckily, the team at Dev.co can help in creating the perfect website for your brand. Whether you’re looking for top software development companies or custom software solutions, we offer a wide range of software development services. ",
            "From mobile app development to web development, our Louisville software developers specialize in delivering tailored software solutions that fit your unique business needs. Trust Dev.co to provide cutting-edge digital solutions to elevate your brand.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "The advent of the internet has made it possible to create a website on your own without any experience. These DIY website builders make it easier for anyone to create a website.",
                "However, it’s misleading to suggest that amatuer websites will rank well online. Google and other major search engines have standards for each website they rank. Without this knowledge, you’ll only create a website that will fall short of these standards.",
                "Therefore, to save yourself the time, money, and heartache of creating a useless website, you should hire a website design company in Louisville.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We love the work we do here at Dev.co. Over the years, we have built a firm reputation as one of the leading website development agencies in Louisville. When you choose to work with us, you can expect to receive all of the following benefits for your business:",
            ],
            other: [
                "We have more than 250+ developers on our team. This simply means that you will be paired with a professional that fully understands your industry.",
                "We also have access to additional staff that can take on lengthy website development projects.",
                "Our team of developers have been vetted constantly to improve the quality control of our website.",
                "We have actionable experience in providing quality websites for both local businesses and Fortune 500 companies.",
                "We will assign a project manager to your project to ensure that it’s completed on time and on budget.",
                "Our team is dedicated to delivering top-notch results for our clients.",
            ],
            additional: "As you can see, there are so many reasons why we can benefit your website development project. Don’t delay. Consider hiring us today to take your digital presence to the next level."
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "At Dev.co, we have more than 12 years of experience in the website development industry. What we bring to the table is our commitment to maintaining excellent standards of both service and customer satisfaction.",
            "In addition to this, we pay special attention to all of our web development projects, ensuring that every aspect of the project is being properly taken care of. Ultimately, we won’t just help you develop a beautiful website, but also a website that will rank well online.",
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