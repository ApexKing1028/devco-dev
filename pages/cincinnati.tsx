import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Cincinnati"
    const first = {
        title: "Cincinnati Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Design in Cincinnati",
        description: [""],
        content: [
            "The online presence of a business is the first step to success. Yet, for a great number of companies, this opportunity remains unrealized. We understand that a powerful project management and effective online presence is a priority for any businessman. With our Cincinnati web design company, your online presence will be your most powerful asset.",
            "With our help, you can ensure that we will maintain innovative software solutions and more people will be able to take advantage of your goods and services in real-time. Our skilled professionals are among the best website designers in Cincinnati and beyond, and we use only the latest innovations in technology and creativity to make your business truly visible!",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Our software developers create custom websites that provide the quality you expect and deserve. On top of that, our web development staff will use SEO techniques and innovative strategies so your website can start generating sales and leads immediately.",
                "We offer high-end design and development services using cutting-edge technology to meet the needs of small to medium-sized businesses. Our goal is to help you build a long-lasting relationship with your customers through custom digital solutions that can be easily managed through an intuitive back-end interface. We’ll do everything we can to exceed your expectations in all areas.",
                "Start with an attractive business website to showcase your products and services. A quality website from DEV.Co Cincinnati web design & development company is a surefire way to increase and measure the performance of your online marketing strategy and achieve better online visibility. We can design a new website for you or work with your existing one to make it the best it can be. We integrate responsive design concepts with innovation and creativity, creating stunning, easy-to-navigate websites that are guaranteed to increase your online revenue!",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "We create incredibly engaging, highly optimized web solutions for businesses of all sizes. With a team of highly skilled developers, designers, content writers, and project managers, we offer a full suite of web design and development services. Our responsive website designs make it easy for you to keep your online content fresh and available across all devices. From fully responsive mobile sites, to eCommerce shopping carts and custom web applications, DEV.co has got you covered.",
                "Our multi-disciplinary team can expertly handle projects from inception to completion, no matter what your needs are. We’re located in Cincinnati and have worked with clients all over the United States.",
                "From small businesses to non-profits to individuals, DEV.co makes it easy and affordable to get a great new website or maintenance of an existing one. DEV.co also has an amazing staff of programmers, developers, and designers who provide IT support for both businesses and homes, including training, software developer jobs, and consulting for growing corporate clients with multiple locations across the U.S.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "We are the Web Design and Custom Software Development Company right in Cincinnati, Ohio. We create amazing, affordable custom web designs for any business, industrial systems, technical knowledge, data structures, and digital communications, and offer computer science fundamentals everywhere. We are nationally rated at the top of Google for the best website design. Our award-winning team is comprised of designers and developers who turn ideas into beautiful works of art.",
            "Our many software engineer are here to help you with your website. With years of designing and development experience, DEV.co can guarantee that we can build the right site for you. Our Cincinnati Web Design & Development Company team provides quality services at a great value in an ever-changing web presence. We want to be your leading source for anything web-related from Web Design and development, Search Engine Optimization, Marketing, Social Networking, Traditional Marketing, Web Maintenance.",
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