import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Aurora"
    const first = {
        title: "Aurora Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Design in Aurora",
        description: [""],
        content: [
            "One of the most important aspects of having a website is to ensure it is easy to navigate. We provide creative development services to help you get what you want from your web presence. We work with you throughout the project to ensure that what we deliver will meet your business needs.",
            "The DEV.co team is devoted to making your website one the best it can be. Whether you’re looking for web development in Aurora or website design in Aurora, we have the knowledge and experience to get it done right.",
        ],
    }

    const third = [
        {
            title: "Aurora Local Web Design Agency",
            content: [
                "Aurora Web Designs offers other digital marketing and sales products, including Facebook covers, business cards, flyers, invoices, and proposal documents. To help small businesses promote their goods and services, Aurora Web Designs develops expert informational and e-commerce websites. For the past 4+ years in a row, Expertise has recognized us as the top web designer in Aurora. With a variety of WordPress package options, we enable any business to have a low-cost online presence. Our plans are all fully scalable for the future and contain premium themes for the best online presence and speed.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Hire Aurora Software Developer & Senior Software Engineer",
            content: [
                "Looking for a senior software engineer & software developer in aurora? We’re here to help. Dev. co is a software development company based in aurora, with a proven track record of creating high-quality, secure applications that meet the needs of our clients.",
                "If you’re looking for an efficient and cost-effective way to build your business, we can help. At Dev. co, we understand the challenges that come with developing an application and provide services that are tailored to your needs. We’ll work with you to develop an application that works exactly how you want it to, at an affordable rate.",
                "Our work is guaranteed to meet or exceed your expectations. We will always deliver on time and within budget. We will also provide regular progress updates so that you always know what we’re doing and how it’s going. ",
            ],
            other: [],
            additional: ""
        },
        {
            title: "We're A Team Of Talented Developers & Designers",
            content: [
                "We are a team of talented developers and designers who have been working together for over 10 years. We have experience in all areas of web development, from front-end to back-end, and we can work on any project that requires our expertise. We’re always looking for fresh ideas and innovative approaches to design, which is why we treat our work as a craft—not just a job.",
                "Our goal is to create products that help you do your best work, whether that’s saving time or making money."
            ],
            other: [],
            additional: ""
        },
        {
            title: "Superior Website Quality",
            content: [
                "A clear website that is easy to navigate is important for all types of businesses. As an owner or part of a company, you want your website to allow your customers and clients the opportunity to get in touch with their questions and concerns. At DEV.co we make sure that the process for communicating with your customers and site visitors is simplified so there is no confusion on the path to making a purchase.",
                "Whether your business needs a new website design or you are planning to redesign your existing website, the highly trained and experienced team of web designers at DEV.co will work with you to develop the best strategy for your project, one that is both cost-effective and visually appealing so that you can increase your sales and generate more leads.",
                "Our team of creative designers and developers are ready to take your website to the next level with a custom, mobile-friendly website that is built to improve your online visibility, generate more leads, bring in new customers, and build your brand. We provide clean, simple, and effective websites. We understand that designing a website can be very difficult and also very time-consuming. We have taken the guesswork out of designing your website. We have created some template sites which you are able to customize to fit your needs.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "The DEV.co software development team prides itself on this very important aspect. The development team is experienced, knowledgeable and receptive to the needs and wants of its client.",
                "Utilizing the latest in web design technology, DEV.co’s web design team will ensure your site is mobile-friendly, uses state-of-the-art SEO measures to ensure your site easily ranks in searches for keywords that matter and looks beautiful on every device!",
                "DEV.co will take your needs and goals and produce a site that is engaging, impressive, simple, but most importantly easy to navigate. As web developers, we know that viewers click away from websites that are too technical.",
                "We know they will do the same if it is not visually appealing within a few seconds of them arriving at your website. Overall, our goal is to make sure you’re getting the largest return possible for every dollar spent on a website. We understand how important it is to keep the site updated with new content, products, services, or any other changes that may affect visitors long into the future.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "What We Bring to the Table",
            content: [
                "DEV.co is a development company based in Aurora, Colorado that designs and builds websites. To develop a website, DEV.co will work closely with you to understand the challenges you face & how your business could benefit from a bespoke website.",
                "We’ll sketch out ideas, create UX wireframes, design your new site and implement it all from scratch. Each step of the way, we’ll be working closely with you to ensure that we’re creating a website that will not only look great but will also work seamlessly across all browsers and devices.",
                "We service clients all over the world from our offices in Denver and Aurora. Some of our services include marketing, search engine optimization, custom web design, and mobile applications. When you work with us at DEV.co, you will be working with a web development company that understands every aspect of your online business, including the importance of effective website design.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "Why Choose us",
        content: [
            "Aurora Software Developer is a leading software development company in Aurora. We offer a wide range of services to our clients, including custom software development, web design and development, e-commerce website creation, application development, and web maintenance. We specialize in building custom software solutions for clients and partners, so we can design and build the right solution for your needs.",
            "We are the only software development company that has developed over 3000+ applications for various clients. Our extensive experience in developing Android mobile applications has helped us become one of the most renowned mobile app development companies in India.",
            "Our team of experienced developers and designers will provide you with innovative solutions to all your software development needs. We offer our customers a wide range of services such as product design and user interface design, database design, application architecture, back end system design, data integration etc.",
            "We’re not just a software development company—we’re also a team that takes pride in our work, and we want you to be happy with the end result. Our goal is to create software that’s both useful and beautiful, so that you’ll use it every day and love it. That’s why we offer 24/7 customer support so you can reach out when you need us most.",
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