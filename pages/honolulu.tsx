import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Honolulu"
    const first = {
        title: "Honolulu Custom Software Development Company",
        content: [
            "Developing a website that succeeds in today’s digital world is an art and a science.",
            "DEV.co is a full-service web design agency specializing in creating custom, search-engine-optimized solutions for small businesses and start-ups in Honolulu, Hawaii, USA.",
            "As one of the best software development companies, we can create a custom website to reflect your company’s personality and convey your message to the right audience.",
        ]
    }

    const second = {
        title: "Web Design in Honolulu",
        description: [""],
        content: [
            "If you’re looking for a professional web design and development company in Honolulu, you should choose DEV.co software development firm. With our obsessive focus on web marketing know-how, we’ll ensure your site converts browsers into customers.",
            "At DEV.co Honolulu, we are a full-service web design and development company focused on growing your business. Our custom solutions will help you get noticed online using targeted search engine optimization (SEO).",
            "We’ve been designing websites that are in sync with your company’s brand, building responsive websites, and designing web applications since 2006. DEV.co software development firm has the creative instinct necessary for a unique edge in today’s highly competitive marketplace, and we use this to implement an effective mobile app development and marketing communication strategy for your business.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "In today’s super-competitive business environment, an effective website is essential. In less than a year, we have helped hundreds of local small businesses develop their online identity, and improve their overall sales just with our search engine optimization services alone.",
                "With our in-house team of graphic designers and software developers, we create SEO websites to drive traffic to your website.  We can get your new business consulting, fledgling blog, or web presence jumping out of the search engines and onto the front page. We build better websites than our competitors.",
                "We specialize in web design and development, fully responsive mobile sites, e-commerce, mobile apps, and digital marketing.",
                "DEV.co Honolulu web design & development company has specialists committed to your project management success. Give us a call to schedule a no-obligation in-person consultation at our Honolulu office today. There is no cost to you!",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Software Development Capabilities",
            content: [
                "Countless local businesses, non-profits, and corporations have come to DEV.co for their search engine-friendly websites since our company is a Honolulu web design and development company. Our focus on fast-loading, search-engine-optimized sites with the latest technology while keeping prices affordable has made us the web designer of choice for small and start-up business owners all the way through large corporations in Honolulu. Check out our work today; you won’t be disappointed. ",
                "Our web design services are the perfect fit for entrepreneurs, start-ups, and small business owners. We create websites that get you found online and help turn browsers into customers. What’s more? Our people bring years of in-house experience to their roles, so you can be certain that there won’t be any “consultant speak.” We communicate directly with you and keep you up to date on our progress throughout your project.",
                "We know that great web design can mean the difference between business success and failure. Most Honolulu businesses usually fail within their first year of operation due to bad marketing decisions. This is a full-service commercial web development company from start-up to e-commerce, websites to lead generation services. Our expertise in search engine optimization will get your company more traffic.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "Development Services We Provide",
        content: [
            "DEV.co is a Honolulu web design and custom software development company that helps small to medium-sized businesses develop or improve their online presence.",
            "We’re a team of designers, software developers, programmers, and content creators. We plan, build, and launch websites that are beautiful, easy to use, and rank on the first page of Google. Our expertise includes both new website development and website redesign/redesign.",
            "We are passionate about creating clean, user-friendly, modern websites that we’d be happy to have in our own portfolios and share with our friends and family. ",
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

    const seventh = {
        title: "",
        description: "",
        content: [
            {
                title: "",
                content: [
                    "",
                ]
            },

        ]
    }

    return (
        <Location first={first} second={second} third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;