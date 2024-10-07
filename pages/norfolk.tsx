import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Norfolk"
    const first = {
        title: "Norfolk Custom Software Development Company",
        content: [
            "DEV.co is a popular Norfolk custom software development company that can help you build your site. With a team of experts and agencies that work together, they manage to deliver fast results while keeping within your budget.",
            "DEV.co offers premium web services, including custom-designed websites, domain registration, and website management so you can relax and let them do all the hard work, making them a great choice for small businesses and start-ups.",
        ]
    }

    const second = {
        title: "Web Design in Norfolk",
        description: [""],
        content: [
            "Small businesses with limited budgets can find great exposure by licensing content to be used on large publishers’ websites, driving traffic back to the site, and essentially creating a network of affiliated sites that will help increase brand awareness and sales.",
            "DEV.co is an online marketplace that makes it easier for small companies to sell these sorts of valuable rights to bigger firms.",
            "With DEV.co, you get a beautiful and functional website, tailored to your needs. We craft clear and effective websites, that are tailored to your business goals. With over a decade of experience, sit back with peace of mind knowing your project is in good hands with us.",
            "Developed and maintained by an all-star team of designers, engineers, and marketers, DEV’s website creation service is all about creating meaningful and dynamic digital experiences. Developing your site is our passion; it could be yours too.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Whether you want to empower your team with a private intranet, sell your products online, or simply update your company’s website, DEV.co makes it easy.",
                "Just plug in the custom design and development framework, and we’ll build a brand-new site for you that works on any device. We’ve been building sites and mobile apps since the web was young – from start-ups to Fortune 500s, you can depend on us to get it done right.",
                "DEV.co can produce web and mobile applications with development and UX teams supported by a design team, technology partner, and project managers, all collaborating across office locations and time zones to deliver the best possible application both on time and within the budget, 5 days a week, 52 weeks a year.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "DEV.co is serious about building websites that make their owners serious money. From the initial consultation to final checkout, we at DEV.co approve every project from concept to completion, keeping it in line with your business goals and ensuring there are no hidden fees or fine print.",
                "We specialize in WordPress web design and development, WooCommerce e-Commerce solution, together with Bootstrap for CSS / UI customization, and Shopify for Magento eCommerce stack.",
                "DEV.co is a web development company that creates stunning, functional, and highly adaptable websites using the latest technologies and platforms. We are a creative agency that can help you create breakthrough solutions for your business vision, improving your bottom line and increasing your brand awareness.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "If you’re looking for a website development company, DEV.co is the way to go. With an experienced team of development specialists, this firm can make your dreams come true. Whether it’s a small business website or a blog, you’ll get the most innovative sites in the industry.",
            "DEV.co allows you to develop a professional feature-rich website in 10 minutes. It features their innovative customizer, widgets from Twitter and Facebook, responsive design, easy installation, no coding skills required.",
            "Whether you’re launching a new product or service, updating your site, or just need a consistent look for your business materials, DEV.co can help. Our team is energetic and values creativity. We work with businesses of all sizes and we won’t let go until you love the site you get. ",
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