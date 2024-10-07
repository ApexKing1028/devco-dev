import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Minneapolis"
    const first = {
        title: "Minneapolis Custom Software Development Company",
        content: [
            "DEV.co is the leading online platform for purchasing websites and mobile friendly sites. We work with sellers from all over the world to list their top-quality websites and domain names at fair prices. Our service simplifies the process of purchasing a website or domain name making it easy for you to get started.",
            "We don’t rush into a project. We take time to truly understand your business, branding, and desired objectives — because great design ultimately comes from knowing your goals. We help businesses reach their online potential, aiding in the development of an idea into a fully-fledged company.",
        ]
    }

    const second = {
        title: "Web Design in Minneapolis",
        description: [""],
        content: [
            "DEV.co is a strategic design consultancy firm that helps companies innovate and improve their businesses. We specialize in custom-built campaigns, branding projects, web design & development, and other such creative services for businesses of all sizes. While we have a dedicated team to deliver on our commitments, we also give a lot of room to our creative associates to balance their personal hobbies.",
            "Our main focus will be on strategic ideation and developing competitive or disruptive positioning, along with a design concept that will be impactful and unique. We help companies supercharge their startup, corporate, or agency branding. Our process determines the target audience and how they can uniquely position your business in the market – ultimately resulting in a stronger bran",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "We understand that a strong brand identity is important to any company. Popular websites can be a valuable asset for a small business or start-up. Here's how to set one up for yourself that will create long-term value for your company or idea by getting people talking and building interest in you.",
                "DEV.co assists in the process of developing brand identity by providing solutions for business start-ups, designing and developing websites for businesses, and consultation in branding and strategy.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "New websites are launched every day, and the market is more cutthroat than ever. Internet users are seeking sites that are clean, unique, and exciting to visit. If you want to make it big, the first step is developing a new website. The second step is choosing a company with web development capabilities that can truly represent your business. That’s where we come in. It’s important to us to really understand your business and objectives when we begin a creative project.",
                "We’ll work with you to get a deep understanding of your previous marketing successes and failures, company goals and objectives, target audiences or demographics, along the existing brand or image that you hope to maintain. This allows us to work with you collaboratively from the beginning of our relationship, beyond the more traditional client/agency relationship- in which we only see each other for a few hours in between phases in the project. It also ensures that our work is truly rooted in your company’s overall objectives and supports them throughout.",
                "With DEV.co you can quickly create a professional website, domain, and email address. The community of designers and developers behind DEV.co gives you access to thousands of custom designs for your logo, branding, and design needs. With our no-coding platform, anyone can launch a website in seconds—complete with the custom domain name!",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co is a website development service that offers a faster and more collaborative way to develop websites. It all starts with an initial consultation.",
            "We’ll work with you to understand your business, branding, and desired objectives before we initiate the concept development phase. From here we start our process to iterate through concepts and produce a handful of mockups that are ready for real user feedback.",
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