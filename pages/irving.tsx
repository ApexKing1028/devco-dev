import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Irving"
    const first = {
        title: "Irving Custom Software Development Company",
        content: [
            "Whether you’re an established business or a start-up, DEV.co offers web design powered by modern technologies and best practices. Our custom solutions help businesses thrive in today’s digital space.",
            "As one of the best software development companies, we provide flexible plans featuring responsive web design, eCommerce, WordPress consulting, social media integration, and more. Each project aims to enhance your online presence, boost brand recognition, and increase user traffic and sales leads.",
        ]
    }

    const second = {
        title: "Web Design in Irving",
        description: [""],
        content: [
            "At DEV.co, we take a holistic approach to software development services. ",
            "Usually, a single team works on both sides of the project-management coin: creative design and technical development.",
            "This collaboration ensures that every site is tailored to its purpose while meeting usability, accessibility, and scalability standards.",
            "As a leading software development company, we offer a full range of web design, hosting, and marketing services for small businesses and start-ups. Our expert web developers and software developers deliver expertise to create exceptional software solutions that drive success.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Whether your business is new or thriving, we have a variety of web design and web development services to fit your needs. From the ground-up concept to the completed project, our professional team will work with you to provide innovative solutions.",
                "Our management team handles all of the backend programming for every website we create for our clients, ensuring that your online presence seamlessly integrates into your existing business objectives. We build better websites than our competitors.",
                "We specialize in web design and development, fully responsive mobile sites, e-commerce, mobile apps, and digital marketing.  Our team has been designing and building websites for over 15 years, so we have the experience and know-how to create results you’ll love.",
                "Are you looking for a landing page or an eCommerce site? We can help with that, too. We offer flat-rate pricing and short deadlines. Trust us to meet all of your website needs – big or small – through our complete online marketing services: website design & development, online advertising campaigns, social media marketing, and search engine optimization (SEO).",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "Our team of web design & development experts offer a full range of web services including custom website design, HTML5 & CSS3, Flash & Flex, database integration, WordPress, and Joomla support to help businesses grow and succeed online. Our search engine optimization (SEO) techniques ensure your site ranks higher in search engines. Contact us today to schedule a free consultation.",
                "Our experienced team of internet marketing specialists and web design experts are committed to building responsive, visually stunning websites that put your business in the right place at the right time.",
                "We create websites that get you noticed.  We offer a wide range of web design and web development services that’ll help your business thrive online. We work with our clients to create and manage a custom website, so you can focus on running your business.",
                "Our team is friendly, knowledgeable, and always open to networking opportunities. Our years of experience will make any web project easy, efficient, and most importantly effective.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "You just need a website. You want something that looks and functions great, and you want it done quickly. Whether you have no experience in web development or are an established brand looking for a refresh on your digital presence, DEV.co’s web design professionals are here to take care of your project from start to finish.",
            "We offer both website design and website development services. We are a leading provider of custom website design, development, and internet marketing services for small business and corporate clients. Our web design firm specializes in creating website solutions that are both beautiful and functional. Our team specializes in creating beautiful, functional websites that are engineered to convert.",
            "We are experts at web development and our designers can create websites that reflect your brand identity and present a strong image to your clients. From start-up companies to established businesses, we have the experience and the tools to meet all of your business needs.",
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