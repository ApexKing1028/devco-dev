import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Oakland"
    const first = {
        title: "Oakland Custom Software Development Company",
        content: [
            "DEV.co offers complete solutions for your business’s digital marketing efforts, from design to development to promotion to support.",
            "DEV.co will also teach you how to maintain and update the website or app yourself, so you can continually implement SEO, link building, and other important strategies for digital marketing.",
            "DEV.co has also recently begun offering creative services such as logos and brochures if needed",
        ]
    }

    const second = {
        title: "Web Design in Oakland",
        description: [""],
        content: [
            "Start your project with one of DEV.co’s pre-built templates or start from scratch for a customized development experience. DEV.co helps you achieve your vision with custom solutions, unique designs, and undivided support that’s backed by over 9 years of web development and mobile app experience.",
            "Experience demonstrates that high-quality, well-designed, and compelling digital products not only yield the best user experience but also provide greater brand loyalty and business growth. ",
            "DEV.co is an interactive agency for all skill levels, from beginners to professional developers. They’ll build your digital product from start to finish: web app, e-commerce site, mobile app, or HTML email. DEV.co delivers every time at reasonable prices – backed by their 100% happiness guarantee.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "DEV.co aims to provide the best user experience in the development business. We want clients and staff to be proud of what we do together; we want them to look forward to sharing our work with their friends, peers and family. That is why we built DEV.co – to create websites, apps and custom digital solutions that move prospects and customers forward.",
                "DEV.co is your one-stop solution for all of your new media needs. We build websites, apps and custom digital solutions at the best price possible.",
                "DEV.co is a website development company that creates websites, apps and custom digital solutions for clients across a range of markets. From web design and development to digital marketing, we are experts in the field and have worked with start-ups and Fortune 500 companies around the globe.”",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "DEV.co is a website development company that creates websites, apps and custom digital solutions for clients across a range of markets. DEV.co provides the tools you need to create smoothly transitioning apps designed for mobile devices with cross-browser compatibility and code that keeps up to date by itself.",
                "Smooth transitions are just one example of the possibilities enabled by DEV.co’s unique approach to development. Whether you’re building websites, apps or even infrastructure, we’ve made it easy for you or your team to create amazing experiences that will keep users coming back.",
                "DEV.co is a website development company that creates websites, apps, and custom digital solutions for clients across a range of markets. When their former digital marketing agency closed its doors, leaving them in need of an agency to provide creative ideas to steer their company forward, they needed a partner they could trust.",
                "DEV.co chose to work with Adaptive Path because they were clear about their approach and because they thought we would understand what they do as developers better than most agencies.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Tables",
        content: [
            "For more than 10 years, DEV.co has worked with clients ranging from small businesses to large enterprises across several industries to create custom websites, apps and digital solutions that grow brands and strengthen company revenues. Jazz up your digital presence. DEV.co designs full websites and custom digital solutions for a wide range of clients across the United States.",
            "As the leading web development company, our knowledge of programming languages and website customization is boundless. That’s why our team of web designers and developers is at your disposal to make sure your new website or mobile application is one that will wow your current and potential customers.",
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