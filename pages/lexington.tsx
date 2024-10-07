import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Lexington"
    const first = {
        title: "Lexington Custom Software Development Company",
        content: [
            "We at DEV.co are a full-service web agency in Lexington, Kentucky. We specialize in the design, development, and maintenance of fully functional and search-friendly websites for both small businesses and start-ups.",
            "Our team utilizes designs that are user-friendly as well as provide the perfect platform for small businesses to be discovered by their customers.",
            "Our services include: Web Design & Development SEO Marketing Creative Media Services.",
        ]
    }

    const second = {
        title: "Web Design in Lexington",
        description: [""],
        content: [
            "We at DEV.co are a web design and development company located in sunny Lexington, KY. We aim to empower small businesses by providing state-of-the-art web solutions at a reasonable cost.",
            "We specialize in custom, search-engine-optimized website design, and development. From our office on the Kentucky border, we are able to offer software development services to businesses anywhere from San Antonio to Mexico City.",
            "Our team works with you from beginning to end to create an online presence that reflects all of the best aspects of your business, so you can see what it feels like to be working with a company that takes care of your data needs, your hosting, your security, and a whole lot more.",
            "We do this all while providing you with upstanding customer service, and some of the most competitive prices in an industry notorious for overcharging small businesses on price.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "DEV.co is one of the best software development companies in Lexington, KY. We are creative thinkers who generate creative ideas all day long.",
                "Our designers are experts in typography, color, and layout, and our developers are ninja-like masters of code. When we unite these two disciplines to craft a website for you, we can help you make an unparalleled first impression on your customer.",
                "We specialize in web design and development, fully responsive mobile sites, e-commerce, mobile apps, and digital marketing. The creative web design experts at DEV.co Lexington stop at nothing to deliver the best possible user experience, taking any size of business through every step of the process to create a custom web experience that is both visually appealing and technically efficient. ",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "We specialize in creating great user experiences for small businesses with innovative design, effective copywriting, powerful marketing strategies, and results-driven CMS implementations. We help small businesses and start-ups get found online. From logo design to eCommerce, we develop a look that is right for you.",
                "The right software partner will create websites that people want to visit. That’s us. We can take any business to the next level through search engine optimization: increasing its visibility online, building web traffic, and converting visitors into paying customers.",
                " The right software partner will create websites that people want to visit. That’s us. We can take any business to the next level through search engine optimization: increasing its visibility online, building web traffic, and converting visitors into paying customers.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Tabl",
        content: [
            "DEV.co is a full-service web design and development firm based in Lexington, Kentucky. Our clients are located across the US, Canada, and Mexico, but we’ve never lost sight of our roots in Kentucky.",
            "We specialize in designing and developing beautiful websites for small businesses, start-ups, non-profits, artists & crafters who care more about quality than quantity. We were rated #1 Local Web Development Company in 2012 and have ranked as the best web development company in Lexington, KY for over seven years. Our cutting-edge web development team specializes in creating innovative, customized websites that convert leads into long-lasting customers.",
            "We operate with a ‘Customer Overall Effectiveness’ (COE) method—making sure your website not only looks good but also does what it’s supposed to do: getting you more clients, customers, sales, or whatever you want to call them!",
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