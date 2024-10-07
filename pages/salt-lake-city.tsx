import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Salt Lake City"
    const first = {
        title: "Salt Lake City Custom Software Development Company",
        content: [
            "Get started on your next project with DEV’s team of experts and kick-ass technology. Our specialists will build a customized website, mobile app, or connected device from scratch to suit your needs. As a client, you’ll have unlimited access to a dedicated account manager who will provide support and walk you through the development process, from the blueprint to deployment. From inspiration to achievement. The appearance of your business, the way it behaves online and offline, and how well it adapts in an ever-changing digital landscape is all-important.",
            "Luckily for you, we are a team of experts that can create a custom website or experience for your business. We’re proud to help companies with end-to-end solutions in web design and development, creative and brand identity development, and more. ",
            "Using lean methodologies and the latest technologies, our multi-disciplinary team of designers, developers, marketers, and thinkers create tailored solutions for a variety of verticals around the world – empowering business leaders to focus on driving their bottom line.",
        ]
    }

    const second = {
        title: "Superior Website Quality",
        description: [""],
        content: [
            "DEV.co offers end-to-end solutions to brands, companies, and startups. Our team helps with web design, development, identity design, marketing, and more. From the logo to the website, we’re here to help you with all your online needs. We’re a website design and development company that helps startups, entrepreneurs, and businesses develop ideas into functional business realities. Our projects include websites, creative branding, and eCommerce solutions.",
            "The team at DEV.co brings a mix of design savvy and technology innovation to every project we work on. Here are some of the services we offer: Web Design & Development, Branding & Creative, Visual Storytelling, Mobile Applications, Digital Marketing, and more.",
            "DEV.co apps cost as little as possible, & are designed with the same techniques & tools used to build things at Facebook, Twitter, Tumblr, Airbnb, Etsy & Uber. Our goal is to make you look good so you can focus on business.",
        ],
    }

    const third = [
        {
            title: "Our Capabilities",
            content: [
                "We do what we love: Technology and Internet Strategy, Web Design & Development, Creative Design & Branding Strategy. We are a group of professionals with diverse knowledge around the globe. As a team of award-winning, nationally recognized designers, writers, and developers, DEV.co loves to partner with companies to create effective visual communications solutions. From websites and logo design to brand identity and collateral development, we’re proud to help businesses grow.",
                "At DEV.co, we give our clients the tools they need to make their ideas a reality—real solutions, not just websites. By utilizing cutting-edge techniques and best-in-class programs, our team will produce innovative websites that can reach a global audience.",
                "We’re an in-house team of designers and developers that crafts innovative websites, modern marketing campaigns, and useful apps. We work alongside your team whether it’s a complete overhaul or small custom adjustments. Let’s build something great together.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co is a product development partnership that helps you launch new products and grow your business. We create custom websites, mobile experiences, and connected devices that help you innovate, differentiate and stay ahead of the competition.",
            "Our experts’ partner with startups and leading companies to make products that solve customer problems in new ways. Our team of experts will create a custom website, mobile experience, or connected device for your business. Our experienced team of designers and developers will help you bring your ideas to life.",
            "We’ll collaborate with you on every step of the process, from discovery and strategy, through creative development and product delivery. Watch our service video. We’ll work with you to understand your needs and build something that will help bring them to life.",
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