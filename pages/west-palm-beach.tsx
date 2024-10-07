import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "West Palm Beach"
    const first = {
        title: "West Palm Beach Custom Software Development Company",
        content: [
            "If you’re looking for a custom software development team that can help your business, you’ve come to the right place.",
            "At DEV.co, we specialize in creating unique and innovative custom software solutions that will help you achieve your business revenue goals, with a strict focus on project ROI and cost management. We have a team of experienced software developers and project managers who are passionate about their work, and we’re always ready to take on new challenges.",
            "While we work with local businesses in West Palm Beach and across South Florida, we also have worked with internationally recognized 500 companies.",
        ]
    }

    const second = {
        title: "Web & Software User Experience Design in West Palm Beach",
        description: [""],
        content: [
            "User experience (UX) design is one of the most important aspects of software development. It’s the process of designing a product that is easy and enjoyable to use. This involves creating wireframes, prototypes, and user flows that allow users to interact with the software in a natural way.",
            "High quality UX design is essential for creating a positive user experience. It can make the difference between a product that people love and one that they hate.",
            "That’s why it’s so important to work with a team of experienced designers who understand how to create an engaging user experience.",
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "When it comes to web design and mobile application development, it’s important to choose a company that can provide you with quality services. At DEV.co, we specialize in creating beautiful and user-friendly websites and mobile applications.",
                "We have a team of experienced designers and developers who are passionate about their work, and we always strive to produce the best possible results.",
                "We understand that quality is essential when it comes to web design and mobile application development. That’s why we take the time to design and develop each project with care and precision. We also use the latest technologies and tools to ensure that our products are up to date and compliant with industry standards.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We take immense pride in the work we do here at Dev.co. We have a special commitment to our clientele, and that’s to only produce top-quality software, mobile apps and websites that will provide an excellent user experience.",
                "Here’s how:",
            ],
            other: [
                "We take the time to understand your needs and design solutions that meet your specific requirements",
                "We offer competitive rates, so you can rest assured that you're getting the best value for your money",
                "Our team of experienced developers are passionate about their work and always ready to take on new challenges",
                "You will work with someone on our team who will take the time to understand their needs and design a solution that meets them",
                "We provide dedicated project managers and DevOps engineers, ensuring your software project is delivered and efficiently run",
                "We are a team of experienced developers who are passionate about their work"
            ],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "So what makes us different from other companies? Simply put, we care about our clients. We take the time to understand your needs and design solutions that meet your specific requirements.",
            "We also offer competitive rates, so you can rest assured that you’re getting the best value for your money.",
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