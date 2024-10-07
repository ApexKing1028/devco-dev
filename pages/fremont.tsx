import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Fremont"
    const first = {
        title: "Fremont Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Design in Fremont",
        description: [""],
        content: [
            "At DEV.Co, we’re passionate about giving your business the ultimate website. Crafted with care and expertise, our web design and development services are designed to help you get maximum benefits from your online presence. We’ve got a firm grip on computer engineering principles which allows us to execute complex projects seamlessly.",
            "Located in picturesque Fremont – a city known for its diverse businesses – we stand out as one of California’s top-notch website design companies; making it easier than ever before for entrepreneurs like yourself to create job alert or create technical design documents effortlessly through software engineer jobs platform that comes at affordable prices with flexible payment plans.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Based in Fremont, we’re a local web development company called DEV.Co. We aren’t just operators; we live here too. This gives us an edge because it means understanding your goals matters to us personally. In fact, operating systems and the world of computer science is our playground! You won’t have to wait for ‘a few seconds’ before seeing your vision start taking shape – you’ll be involved right from step one. Our numerous software engineer do more than build websites; they also market and promote businesses via various strategies.s",
                "Set your business apart from your competition with digital services by Dev.Co Fremont CA. We are dedicated to all things design and development. Our digital services use cutting-edge web technologies for efficiency; consider us the solution that makes your website work smarter. As a plus point? We’re also the most wallet-friendly within this space in town. And did we mention our prowess includes test automation as well as top-notch software design skills?",
                "We specialize in responsive websites and modern HTML5 web design that is SEO friendly, working with a number of different industries from small businesses all the way up to Fortune 500 companies. Unlike other web design firms, we analyze your business in-depth and use a personable approach to help you achieve your goals with a custom design that helps drive new customers and sales to your business every day.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "As a comprehensive web design and development company, we provide tailored solutions to businesses large and small. Whether you’re looking for “jobs in Fremont CA” or operating an international enterprise, our affordable services will ensure your ‘verification successful waiting’ is well worth it as we aid in the growth of your business.",
                "Our in-house team, comprised of proficient designers and developers well-versed with SQL server operations and data analytics techniques, is committed to creating aesthetically pleasing websites that not only enrich your bottom-line but make digital communication a joy for you. Leveraging state-of-the-art technology coupled with performance analytics insights gathered from detailed requirements study leaves our clients captivated by the strategic solutions we deliver.",
                "DEV.Co is here to help you do more business online. Our recent work includes websites, web apps, and eCommerce solutions for clients in a variety of industries. Contact us today for a free consultation!",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co is a well-known web development company in Fremont, California with a reputation for making beautiful, functional websites for clients – from startups to global corporations. They are also an SEO agency, which means they have the technical expertise to help ensure your website meets the needs of search engines and the goals and demands of daily visitors.",
            "DEV.CO is a Fremont web design, development and interactive marketing agency with a fresh approach to great web designs. We’re a small team of handpicked artists, designers and developers who have one shared goal – to build websites that are not only outstanding from an artistic point of view but that reach the target audience and drive real business results for our clients.",
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