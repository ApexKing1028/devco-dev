import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "New Orleans"
    const first = {
        title: "New Orleans Custom Software Development Company",
        content: [
            "DEV.co offers a wide range of services to business owners, marketing experts, and creative types.",
            "We work diligently to deliver the development solutions you need so your projects are successful and your clients are pleased.",
            "There’s no limit to what we can offer you, and our business development plan is always priced to meet your budget.",
        ]
    }

    const second = {
        title: "Web Design in New Orleans",
        description: [""],
        content: [
            "No matter what size your business is or the type of service you need, DEV.co has a plan that will fit your needs. With a wide array of features ranging from responsive web design to e-commerce capabilities, we’ve got a plan that’s right for you.",
            "DEV.CO offers Development, Design, and Marketing plans for high-growth companies as well as a unique service plan that allows individual freelancers or agencies to use the tools they want on their own terms.",
            "With 3 tiers of service and over 130 features packed into our plans, we’re confident you’ll find the right mix of services for your company. Get all the features you want from your development team ― plus a whole lot more. ",
            "We started DEV.co to create an agency that crafts websites that not only look great but work seamlessly for customers and business owners alike.",
            "We’re a small team of passionate developers, designers, and customer care professionals with varied experience in agencies, startups, and established companies ― and we’re here to serve you.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "DEV.co is a digital services agency with teams in New Orleans, Louisiana. We specialize in the design, development, and maintenance of fully functional and search-friendly websites for both small businesses and start-ups.",
                "We are a global creative agency that specializes in website design and development. We pride ourselves on being able to provide clean, minimal, and functional websites for our clients at an affordable price.",
                "We build clean, organized, detailed sites that are easy to navigate whether you’re using a desktop or mobile device. The sites reflect our clients’ professionalism and dedication to detail and help them connect with customers online in a meaningful way.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "With deep expertise in application and website development and design, our team of qualified designers and developers will build your website from the design phase all the way through to the final product.",
                "We’ll work with you to ensure that your needs have been met and, if changes are needed at a later date, our maintenance service makes it easy to keep your website looking fresh and functional.",
                "DEV.co is an in-house development agency, headquartered in New Orleans. This means that we are involved in every step of all of our projects from the first sketch to the final delivery.",
                "With years of experience, we’ve got the right balance of quality and value for every project we undertake. So, if you’re ready to get noticed online with a professional-looking site that grows steadily through search engine rankings, contact us today!",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co specializes in the full-stack design of websites for small businesses and start-ups. With over 10 years of experience, many completed projects, and numerous awards, we know what it takes to launch a compelling website that will attract customers. We invest in quality design. We can help you get more leads and sales for your business.",
            "Our team of designers, developers, and marketing specialists specializes in launching websites for both small businesses and start-ups. We’ve partnered with thousands of clients to find the perfect balance between design and technology. Our team designs, develops, and maintains beautiful websites that make an impact on search engines while effectively converting visitors into leads.",
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