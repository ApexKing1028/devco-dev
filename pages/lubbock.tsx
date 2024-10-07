import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Lubbock"
    const first = {
        title: "Lubbock Custom Software Development Company",
        content: [
            "DEV.co has been designing and developing custom software and fully functional websites for over a decade.",
            "We also develop mobile-friendly sites based on the latest application frameworks such as Angular and React.",
            "Our team develops websites using a combination of open-source technologies and frameworks including Node.js, HTML5, LESS/CSS3, Photoshop/Gimp, as well as off-the-shelf tools such as WordPress and Drupal that are constantly being updated with new features.",
        ]
    }

    const second = {
        title: "Web Design in Lubbock",
        description: [""],
        content: [
            "At DEV.co, we take pride in creating customized and fully functional websites that align with your business goals and help you grow. We’ll work with you to understand your business, branding, and desired objectives before we initiate the concept development phase. Our creative process combines strategic direction and developmental strategy for a comprehensive approach to website design.",
            "For our clients’ peace of mind, we offer ongoing hosting and marketing services at no additional cost to ensure user engagement via the web on a daily basis.",
            "DEV.co is a small but mighty team of designers, developers, and marketers ready to take on development projects – both big and small. We have developed over 1000 custom websites that meet all web design standards including W3C compliant HTML5 and CSS3 code; SEO-friendly URLs; fast load times; and eye-catching designs.",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Popular websites can be a valuable asset for a small business or start-up. To drive a successful and progressive web presence, we provide full website design services since 2005. We work with your online marketing strategy to reach more clients, retain current ones, and innovate your way above your opposition.  DEV.co is an unconventional agency.",
                "We create and maintain fully functional websites for small businesses and startups, and we do it at a fraction of the cost of our competitors. With a team full of designers and engineers who actually understand how web technology works, we focus on quality instead of budget, delivering top titles. We specialize in custom software development using Unity3D. The best part? Our ingenious team saves you money by getting it done right the first time.",
                "All of our websites are designed and developed in-house, using the very latest HTML5 and CSS3 technologies. Our Content Management System allows you to update content anytime from anywhere, without additional fees. We also offer maintenance packages that will allow you to focus on your business rather than maintaining your site.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "At DEV.co we develop ideas that are challenged by cutting-edge technology and the experience of years. We have made a name for ourselves as a successful, global development team who are never done learning and always looking for new challenges. Our team of talented individuals works closely with our clients to ensure that the websites we create are both functional and engaging.",
                "DEV.co’s focus is on evolving your idea into a company fully equipped to survive in today’s fast-paced, digital market.   Our team of experienced designers and developers creates websites that are fully functional, attractive, search-friendly, easily maintained, and updated.",
                "With more than ten years of experience, a wide breadth of skills, and a background in the advertising world, we know what it takes to make you look good online. We also understand that every business is different and has its own needs and goals. So we don’t provide a one-size-fits-all solution. Our sites are tailored for each client’s unique objectives with targeted traffic in mind.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "DEV.co is a website development and design company. We specialize in creating e-commerce platforms for small businesses and organizations that operate on a limited budget.",
            "We use state-of-the-art technologies such as responsive web development to ensure a positive experience on your mobile phone or tablet. We have been in business since 2002 and have helped thousands of people realize their dreams.",
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