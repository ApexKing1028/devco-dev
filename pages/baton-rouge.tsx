import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Baton Rouge"
    const first = {
        title: "Baton Rouge Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Design in Baton Rouge",
        description: [""],
        content: [
            "Sometimes all you need is an answer. Sometimes you need more. We offer the solution when you’re looking for something more creative than just a company website or web application. Our Baton Rouge custom development services help you get the most out of your current technology and brand.",
            "DEV.Co offers Baton Rouge custom development services that can help you design a functional website for your business, build an application for your mobile device, and provide consultation to present your business in an effective way.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Our custom website development services and project management are second to none. Whether you need a simple website or an entire digital marketing initiative, our team in Baton Rouge delivers with agility, creativity, and expertise. We specialize in small business development and have a wealth of experience designing and creating custom web applications using the latest in open source frameworks.",
                "When you’re ready to design and develop the ideal website for your business, contact us at DEV.Co. Our custom development services in Baton Rouge help you build the perfect website to encourage your customers to buy. We design a custom solution that combines great art direction, design, and programming that meets the needs of your business.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "Taking an idea from the original brief through to stunning reality takes focus and expertise. That’s where our team in Baton Rouge comes in. We’ve helped businesses from around the world communicate with their customers, partners, and communities using the most effective digital channels. Whether you need a simple website or an entire digital marketing initiative, we deliver with agility, creativity, and expertise. No two projects are alike but we make sure they’re all equally awesome. From web design to development, strategy to delivery, let us help solve your communication needs today.",
                "Our clients ask us for internet solutions, and we bring them results. We blend speed, simplicity and expertise with all of our web and mobile development projects. Our team in Baton Rouge assigns the right people to your project, helps you understand the technology and how it will impact your business, and then delivers results. We work closely with you to design your new website, examine search engine rankings and pricing, determine a plan for digital advertising campaigns and monitor online reviews. DEVCO Website Development can turn visions into a reality!",
                "Our team creates beautiful custom development for businesses and organizations in Baton Rouge and across the country. From fully responsive mobile sites to eCommerce shopping carts and custom web applications, we break down complex challenges into manageable tasks to help our clients grow their businesses. DEV.Co is located in Bakersfield, California and has been creating custom websites since 2008.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Our team in Baton Rouge will offer the innovation, agility, and expertise you need to meet your goals. ",
            "The DEV.Co team in Baton Rouge builds websites that help achieve your organization’s goals. ",
            "We understand that every business is unique and that there is no one-size-fits-all solution for your digital marketing needs. You will work with a digital marketing specialist who will guide you through the process to build an effective, strategic plan customized to meet your specific requirements and objectives. From developing a strategy and defining your target audience to advising on the best technical solutions, we’ll be with you every step of the way.",
            "DEV.Co Website Development Baton Rouge is a group of digital marketing specialists specializing in providing website development, SEO services, and social media marketing to a number of small businesses throughout Baton Rouge, Louisiana, and the surrounding areas. Clients will benefit from the outstanding skillset offered by our team of experts who are experienced in their field, passionate about their work, and committed to making a positive impact on our clients’ success.",
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