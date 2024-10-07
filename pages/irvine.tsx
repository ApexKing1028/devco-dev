import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Irvine"
    const first = {
        title: "Irvine Custom Software Development Company",
        content: [
            "Whether you’re an established business looking to revamp your web presence or a start-up company looking to create an online environment for your customers, DEV.co develops web design that is empowered by modern technologies and strategic web development best practices.",
            "Our industry-leading website custom solutions empower businesses of any size to move forward in today’s competitive digital space.",
            "As one of the best software development companies, our flexible plans allow you to take advantage of features like responsive web design, online ordering, eCommerce, WordPress consulting, social media integration, and much more. Each of our software development projects and hosted websites is designed to boost your online presence by improving brand recognition with increased user traffic and more sales leads.",
        ]
    }

    const second = {
        title: "Web Design in Irvine",
        description: [""],
        content: [
            "DEV.co is a full-service Irvine software company. We deliver effective and affordable web and application development to small and medium-sized businesses.",
            "With our creative team of designers, software developers, and online marketing experts, we provide the most modern custom software solutions in the industry. We are focused on helping businesses develop an online presence that meets and exceeds today’s consumers’ heightened expectations.",
            "Our software development team ensures that your custom software and website are easy to search, quick to load, simple to navigate, and engaging to interact with.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "We are the complete web design company for your website. Small, efficient, and affordable, we help you to build a quality site that promotes your business effectively. Whether you need a basic brochure site or an eCommerce solution, we will work with you every step of your web development journey.",
                "We have been featured in Wired Magazine, Mashable, TheNextWeb, and many other websites.   We build better websites than our competitors. We specialize in web design, custom software, mobile app development, e-commerce, and digital marketing.",
                "Our passion for technology and design has driven us to develop a web agency that specializes in creating innovative websites for companies in Irvine. ",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "Leveraging over 10 years of web development experience, DEV.co provides full-service, custom design and development solutions for small businesses and start-ups to Fortune 500 companies. From domains and hosting to web design and mobile app capabilities, we offer everything you need under one roof in a fast, easy, personalized manner with a no-nonsense contract structure that is custom fit for you.",
                "Our in-house team of graphic designers, web developers, and search engine optimization specialists work together to create the best possible online presence for our clients. Since we are a full-service design agency, we offer everything from web design and web application development to graphic design and branding. Because we understand that every business is unique, we take the time to discover all of your company’s goals and objectives before we establish an effective plan to achieve them.",
                "We’re the only web design firm in Orange County and Los Angeles that exclusively designs for small businesses. We’re a team of designers, developers, and strategists with over 20 years of experience in creating stunning websites that convert. We utilize award-winning design, responsive web design, custom development, and expert digital marketing to ensure your site gets found online.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Our Irvine software developer is dedicated to building sites that generate leads and grow businesses. Our teams of professionals are experts at creating custom websites and powerful search engine optimization (SEO) strategies to reach your target audience and generate sales.",
            "ith years of experience on every browser, device, and operating system, we will build a site that works for you. You’re looking for a website that reflects your personality, one that’s fresh and cutting-edge but also clean and professional, gives you total control over the content, is search-engine optimized to help you sell more products and services, and ultimately position you higher in the online world? You’ve got it!",
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