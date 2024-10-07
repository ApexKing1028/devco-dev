import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Garland"
    const first = {
        title: "Garland Custom Software Development Company",
        content: []
    }

    const second = {
        title: "Web Design in Garland",
        description: [""],
        content: [
            "In need of premier website design and development in Garland, TX but hesitant about hiring a local agency? Don’t worry! Give our proficient team at DEV.Co a ring. We’re passionate about delivering first-rate software solutions that include designing an appealing website that accurately embodies your business ethos.",
            "Are you exploring lucrative software engineer jobs or keen on understanding the nuances of the software development lifecycle? Remember we are just one call away – catering to both Garland and Dallas TX.",
            "At Dev.Co, we prioritize using innovative web design technology which includes cutting-edge aspects of computer science and enterprise software development. It’s our expertise that puts us on the map as Garland, TX’s top website design team! ",
            "We offer comprehensive services ranging from crafting new site designs to maintaining current ones – all while ensuring mobile-friendliness and high-quality output at every turn. So when you’re looking for standout software developer jobs or need professional handling of your software applications. ",
        ],
    }

    const third = [
        {
            title: "Superior Website Quality",
            content: [
                "Done correctly from the outset, web design plays a pivotal role. Our team of software developers in Garland, Texas is adept at crafting compelling stories and websites for businesses big or small. A well-planned website signals success within any technical discipline – crucially so within technology-focused industries.",
                "If you’re priming to kickstart a new venture or seeking an upgrade on your current online presence, our expertise extends beyond just traditional methods — we are skilled in object oriented programming languages too.",
                "Let’s talk about what your goals are and offer our digital services for digital marketing, e-commerce, and online reputation. We’ll proceed from there with UX/design and marketing planning to deliver a great website that will serve your business well for years to come.",
            ],
            other: [],
            additional: ""
        },
        {
            title: "Our Capabilities",
            content: [
                "As a professionally managed web development company, we offer comprehensive solutions that integrate marketing strategies and search engine optimization (SEO) techniques to expand your business. Our stack developer experts in software engineering ensure the seamless incorporation of graphic design for branding across social media platforms alongside on-page SEO enhancements.",
                "Our scope extends beyond just creating an online store or mobile website; our versatile software engineers also excel at crafting native apps and implementing content management systems (CMS). What sets us apart is their effective communication skills, which facilitate precise understanding of client needs. If you’re seeking jobs in Garland TX related to this field, consider bringing these skillsets into play with us.",
                "We pride ourselves on being a website design company dedicated to helping local businesses achieve their online goals through the creation of search engine-friendly sites that function regardless of what you are looking for whether it be for gifts or services.",
            ],
            other: [],
            additional: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "The Garland TX area web development experts at DEV.Co has been helping businessmen and women advertise their businesses since 2009. We specialize in creating custom websites with unique, mobile-responsive designs that are user-friendly and SEO-friendly.",
            "We offer website design for a variety of industries including small business, dental, medical, legal and more! Our affordable, easy to maintain websites are designed to get you the leads that you need to make your business a success!",
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