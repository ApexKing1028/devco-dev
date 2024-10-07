import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Jersey"
    const first = {
        title: "Jersey City Custom Software Development Company",
        content: [
            "DEV.co is a Jersey City web design and development firm specializing in custom, search-engine-optimized solutions for small businesses and start-ups. We create websites that are clean, fast loading, and easy to use.",
        ]
    }

    const second = {
        title: "Web Design in Jersey City",
        description: [""],
        content: [
            "DEV.co makes it easy for you to create the website that represents your business best. Our team of talented, experienced designers and developers work hard to ensure a superior result in record time. We make our clients’ websites work hard and look great across multiple devices from desktops to mobile gadgets like smartphones, iPads, and tablets.",
            "Our Jersey City web design team has a passion for customer service that shines through in every project. DEV.co provides custom web design and development services for clients with three or fewer locations.",
            "Our expert staff of designers and developers have a proven track record of creating high-quality, search engine optimized websites that empower every customer to achieve their business goals.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Our services include web design,  fully responsive mobile sites, web development, mobile apps, e-commerce, and digital marketing. We’re backed by 10+ years of experience, as well as a team of smart creatives who understand the constant intersection between technology and human behavior.",
                "We bridge the gap between the creative industries of new media, design, and technology. We use the latest tools and technologies to create web applications designed to generate revenue for our clients.",
                "At DEV.co, we pride ourselves on our ability to perform as an extension of your company by seamlessly integrating into your existing workflow. At DEV.co, our mission is to create outstanding user experiences by building beautiful sites that meet our clients’ business needs.",
                "We collaborate closely with each client to understand their goals, analyze their current situation, and create a customized site that maximizes their chances of success. As one of the best software development companies, we offer cost-effective digital solutions that drive digital transformation. We’re proud to be recognized as one of the top web design and software companies in New Jersey and look forward to hearing from you.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "We’ve been building sites for many different industries. Web design matters. We craft custom websites with the best user experience. Our clients hire us because they want to grow their business online and offline. We are here to take a slice of the pie with your competition.",
                "DEV.co has extensive experience in Web 2.0 design and search engine optimization, helping clients win with an online business. After a few days on location, our team designs all websites from scratch – not templates or stock designs that you see everywhere else.",
                "This holistic approach gives our clients more than just a website, it gives them a powerful web presence that no one else can duplicate. DEV.co’s team of graphic designers, software developers, and web specialists are all compiled under one roof in their Jersey City office so you can rest assured that they always have a hand in your project.",
                "We are the right software development company for you, providing all custom software development services under one contract. As the best software development company among top software development companies, we ensure you know exactly what you’re paying for without incurring additional fees as we work through your project together. We also specialize as a mobile app development company.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "With more than 10 years of experience, our team at DEV.co offers more than just programming and web design know-how. We’ll work with you to define your business goals, strategize your project, and bring your website to life. After all, there’s no such thing as “one size fits all” in the world of web design. It’s a fluid process that requires constant communication to stay on target with your end game. Our expertise is about more than code. It’s about results.",
            "Offering the best in website design, development, and maintenance, our software development company provides beautifully crafted sites that are both functional and attractive. Custom web design tailored to meet the needs of each client is combined with search engine optimization services to ensure that your site ranks among the most visited search results.",
            "Our DEV.co team strives for excellence in every customer service interaction and delivers innovative solutions for clients’ unique business requirements.",
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