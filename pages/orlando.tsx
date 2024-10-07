import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Orlando"
    const first = {
        title: "Orlando Custom Software Development Company",
        content: [
            "DEV.co is a full-service digital agency that focuses on simplicity, speed, and quality. We have everything you need to build a website or an app for any of your business needs. From design to development, we create a solution that meets your unique vision.",
        ]
    }

    const second = {
        title: "Web Design in Orlando",
        description: [""],
        content: [
            "Whether you’re launching a new website, improving an existing one with new features, or needing an app for your business’ annual conference, DEV.co got you covered. Our team includes software designers and web developers that can help make your vision a reality in an affordable and efficient manner.",
            "We specialize in integrating modular solutions for businesses and agencies that don’t have the internal resources to build out their own development brand.",
            "With all the resources you need for creating your own custom website or app, DEV.co will walk you through every step of the process. Our interactive platform allows anyone to build a clean, beautiful website or mobile app without learning code! Follow our tutorial videos and build your website from scratch or use one of our pre-built templates that are sure to impress.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "DEV.co offers an affordable hosted version of your company’s website that is designed to boost your online presence. Our hosting solutions are fully managed, quick and easy to set up, and available with every other DEV.co service.",
                "Each hosted website comes with built-in SEO parameters that help boost your brand recognition and increase user traffic. We host and develop websites for companies that need to reach a new market and increase sales. Our designs improve the brand recognition of our clients, which increases user traffic and leads to more sales-driven inquiries.",
                "DEV.co offers a solution to the rapid building of websites and applications. You can use DEV.co’s simple editor to create custom websites or allow our team to build one for you. Create an accounting app that can be used on smartphones, a multi-touch canvas prototype for your annual conference, or an offline web app while you’re overseas. DEV.co is an affordable way to get in front of your audience using the web or app that suits them best.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "DEV.co focuses on helping software companies show off their software online. Our hosted websites are built to be mobile responsive and give users a great product experience by allowing them to easily sign up for a free trial without having to enter credit card information.",
                "Use DEV.co to build your next web or mobile app at an affordable price. We designed these products with the end-user in mind; our design guidelines are easy to follow and there’s limited technical jargon involved. What’s more, we work with various experienced groups to ensure the best code possible for your new project.",
                "DEV.co is a one-stop solution for anything related to design, development, marketing, and even CodePen. You can hire developers and designers to build your dream app or website and sign up for a CodePen subscription as well. DEV.co’s complex yet sleek interface is an added bonus that will change the way you work and live with your data.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "Instant online visibility for your business by DEV.co. With dozens of custom domains to choose from, there’s a .co for everyone. And our simple website builder makes it easy to have a beautiful site up and running in minutes. We focus on making our hosting service fast, reliable, and affordable; and keeping it innovative.",
            "With deep experience in the cryptocurrency arena, we’re one of the best-placed hosting options when you need to run a cryptocurrency-focused website or accept crypto donations.",
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