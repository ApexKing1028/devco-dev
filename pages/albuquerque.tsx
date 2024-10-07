import * as React from "react";
import Location from "@/components/locations";

const Page = () => {
    const location = "Albuquerque"
    const first = {
        title: "Albuquerque Custom Software Development Company",
        content: [
            "Albuquerque is one of the most popular cities in the world. As such, having your digital presence is key to your success as a business. Seattle is home to both rampant local businesses and Fortune 500 companies.",
            "This means having your business stand out can be difficult. To begin improving your online presence, it’s first best to create a stellar website that will show off your greatest products and services.",
            "For this reason, hiring a Albuquerque custom software design and web development agency is vital. Are you searching for the right company to create your business website? If so, you’ve come to the right place."
        ]
    }

    const second = {
        title: "Software Development in Albuquerque",
        description: [""],
        content: [
            "Albuquerque has been known for years as a hotbed for both local and corporate businesses.",
            "Nowadays, people don’t search for businesses like they used to. Instead of using phone books or online directories, they’re going to use a major search engine like Google and Bing.",
            "Our team of JavaScript experts is capable of delivering a wide range of customization to suit your needs. We work with popular frameworks and libraries including Node.js, React, Angular, Electron, and Laravel",
            "By hiring a professional Albuquerque website developer, you can succeed in building the perfect website for your brand."
        ],
    }

    const third = [
        {
            title: "The Importance of Website Quality",
            content: [
                "Having just any ordinary website isn’t going to suffice. As the world’s greatest search engine, Google has an obligation to rank the best websites possible. Therefore, it uses complex algorithms that build uniforms standards for all websites to abide by.",
                "If your website doesn’t follow these standards, then it’s not going to rank online. Thus, building your very own website will likely never rank well online. A DIY website’s quality will also suffer and cause you to waste your hard-earned time and money.",
                "If your website doesn’t follow these standards, then it’s not going to rank online. Thus, building your very own website will likely never rank well online. A DIY website’s quality will also suffer and cause you to waste your hard-earned time and money."
            ],
            other: [],
            addition: ""
        },
        {
            title: "How We Can Help",
            content: [
                "We take immense pride in the work we do here at Dev.co. We have a special commitment to our clientele, and that’s to only produce top-quality websites that will rank well online.",
                "Here are the other benefits when you choose to work with us"
            ],
            other: [
                "There are more than 250+ software developers on our team. You can receive the peace of mind you deserve as a business owner, knowing that one of our developers will be particularly skilled in your industry.",
                "We have access to additional teams that can take on extremely large website development projects, up to 500+ team members.",
                "All of our developers are trained heavily in their discipline, ensuring that we deliver only the best web development services in Seattle.",
                "No matter if you run a local business or a Fortune 500 company, we’ll see to it that your business receives a stellar website.",
                "We will assign you a project manager to coordinate your entire website development project and keep it",
                "We have amazing experience in creating websites that deliver impactful results."
            ],
            addition: ""
        },
    ]

    const forth = {
        title: "What We Bring to the Table",
        content: [
            "We have more than 12 years of developmental experience in software and web design. Whether you want to improve your online presence or attract more qualified leads to your website, we’ve got you covered.",
            "We have serviced thousands of clients over the years and strive to maintain the highest standards of service."
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
            "We’d love for you to work with us and take your online presence to the next level. To learn more about how you can work with us, click here to speak to a member of our team."
        ]
    }

    const seventh = null

    return (
        <Location first={first} second={second}  third={third} forth={forth} fifth={fifth} sixth={sixth} seventh={seventh} location={location} />
    )
}

export default Page;