import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Greensboro"
    const first = {
        title: "Greensboro Custom Software Development Company",
        content: [
            "DEV.co is a full-service web design and development company based in Greensboro, North Carolina, that specializes in building custom software solutions for businesses.",
            "As one of the best software development companies, we don’t just build a website – we build something that will boost your business by fostering opportunities to engage with a targeted audience beyond your location.",
            "Our services are affordable, and our designers are experienced, delivering constant value while striving to resolve challenges as they arise.",
            "DEV.co provides digital marketing, design & development solutions to businesses in Greensboro. Our team of experts is passionate about creating a positive and lasting impact on our clients’ success.",
        ]
    }

    const second = {
        title: "Web Design in Greensboro",
        description: [""],
        content: [
            "From domain name acquisition to banner design and business strategy, DEV.co is a gold-standard web design and development company in Greensboro, NC. Our web developers integrate digital marketing and solutions into your business model to strengthen your brand and make an impact in the minds of up-and-coming customers.",
            "Our design and digital marketing experts at DEV.co Greensboro Web Design & Development Company specializes in providing results-oriented digital services tailored to your specific needs. With a wealth of experience in our software developers, serving clients from our offices right here in North Carolina, we have the skill set to tackle a wide range of projects.",
            "Our history of high-quality, and custom software solutions allows us to provide unparalleled results for all levels of business. ",
        ],
    }

    const third = [
        {
            title: "Superior Software Development Quality",
            content: [
                "Since 2001, DEV.co has helped e commerce development businesses cut costs and increase productivity by leveraging technology. In today’s digital world, business is not limited to brick-and-mortar operations. With over a decade of knowledge in web development and internet marketing, DEV.co works with clients to strategize their online presence and increase their visibility in the marketplace.",
                "With services including eCommerce solutions, web development, fully responsive mobile applications, value-added content creation, custom web applications, website design and development, and more, DEV.co goes above and beyond the needs of the average business owner. We can not only help you create an awesome-looking website but we will also help you fill it tailored to your business needs. ",
                "DEV.co is a part of a North Carolina-based project management development agency that provides full-service web design & development services. We are a Greensboro web design & development company that’s ready to work with you. Your company’s online presence is one of the most important elements in your marketing strategy. That’s why DEV.co Greensboro provides high-quality web design and development, SEO, and internet marketing services for businesses across a wide range of industries.",
                "We take a lean approach to business ownership and all of our consulting services.  offers solutions that are anchored by the notion of expediency, efficacy, and collaboration between our clients and their customers.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "DEV.co takes pride in its Greensboro web design and development services which are notable for its wide variety of client applications and top-flight digital products. DEV.co’s services include creating websites, mobile app development, search engine optimization (SEO), website hosting, support services, cloud computing, and content management. All of DEV.co’s services are backed by 24/7 support and a 100% money-back guarantee.",
                "We build intuitive creative solutions that help our clients gain and retain customers through a presence on the internet and secure networks of people. We believe that your website should be innovative, cost-effective, and something you are truly proud of because it has the latest techonologies. With our full-service digital solutions and a team of dedicated professionals, you can rest assured that when you work with DEV.co―you’re working with the best.",
                "DEV.co Greensboro is a web design and development company, that specializes in custom websites and e-commerce solutions. With advanced training by industry leaders in the fields of web design and development",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Want a website that performs? DEV.co is a Greensboro web design and development company that will deliver a functional and high-functioning website that will boost your business’ sales and attract new customers.",
            "From our specialty in custom WordPress development to content management solutions, DEV.co has the skills, knowledge, and creativity to develop on just about any digital platform you require. The competitive digital landscape can be overwhelming for business owners looking to set their websites apart. A cost-effective and all-inclusive approach is provided by DEV.co, a leading Greensboro web design and development company.",
            "This local provider has put together an ideal package of services that provides you with everything you need to build, maintain, and grow your website – starting at only $2,499. DEV.co will work directly with you to create a custom solution that best suits your needs and goals, resulting in a seamless premier digital experience for your business or organization.",
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